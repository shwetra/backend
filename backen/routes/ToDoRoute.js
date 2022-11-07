const { Router } = require("express");
const authentication=require("../Middlewares/authetication");

const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/",authentication, getToDo);

router.post("/save",authentication, saveToDo);

router.post("/update",authentication, updateToDo);

router.post("/delete",authentication, deleteToDo);

module.exports = router;