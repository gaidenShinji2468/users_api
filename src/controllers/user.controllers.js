const User = require("../models/User");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
    const users = await User.findAll();

    return res.status(200).json({
	statusCode: 200,
        message: "Reading Success",
	data: users
    });
});

const getOne = catchError(async (req, res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(!user) throw res.status(404).json({
	statusCode: 404,
	message: "Not Found"
    });

    return res.status(200).json({
        statusCode: 200,
	message: "Reading Success",
	data: user
    });
});

const create = catchError(async (req, res) => {
    const data = req.body;
    const createdUser = await User.create(data);

    return res.status(201).json({
        statusCode: 201,
	message: "Created Success",
	data: createdUser
    });
});

const update = catchError(async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const updatedUser = await User.update(data, {
        where: {id},
	returning: true
    });

    if(!updatedUser[1].length) throw res.status(404).json({
        statusCode: 404,
	message: "Not Found" 
    });

    return res.status(200).json({
        statusCode: 200,
	message: "Updated Success",
	data: updatedUser[1][0]
    }); 
});

const remove = catchError(async (req, res) => {
    const {id} = req.params;
    const result = await User.destroy({where: {id}});
    
    if(!result) throw res.status(404).json({
        statusCode: 404,
	message: "Not Found"
    });

    return res.sendStatus(204).json({
        statusCode: 204,
	message: "Deleted Success"
    });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};
