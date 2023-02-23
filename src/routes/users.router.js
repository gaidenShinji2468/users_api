const router = require("express").Router();
const {
    getAll,
    getOne,
    create,
    update,
    remove
} = require("../controllers/user.controllers");

router.route("/")
    .get(getAll)
    .post(create);

router.route("/:id")
    .get(getOne)
    .put(update)
    .delete(remove);

module.exports = router;
