const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", (request, response) => {
  response.send({ message: "Hello World" });
})


// Rotas de usuario
router.get("/users", UserController.index)
router.post("/users", UserController.create)
router.put("/users/:userId", UserController.update)
router.get("/users/:userId", UserController.show)
router.delete("/users/:userId", UserController.destroy);

module.exports = router;