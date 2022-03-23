const { v4: uuid } = require("uuid");

/*
  {
    id: String,
    name: String,
    age: Number,
    email: String,
  }
*/

const users = [
  {
    id: "6595f033-22cd-4087-93e2-0bfb68df01e9",
    name: "Larissa",
    age: 25,
    email: "teste2@teste.com",
  },
];

class UserController {
  static index(req, res) {
    res.json(users);
  }

  static create(req, res) {
    const { name, age, email } = req.body;

    const user = {
      id: uuid(),
      name,
      age,
      email,
    };

    users.push(user);

    res.send(user);
  }

  static show(req, res) {
    const userId = req.params.userId;

    const user = users.find((register) => register.id === userId);

    if (!user) {
      res.status(404).send({ error: "user not found" });
      return;
    }

    res.send(user);
  }

  static update(req, res) {
    const userId = req.params.userId;

    const index = users.findIndex((register) => register.id === userId);

    if (index === -1) {
      res.status(404).send({ error: "user not found" });
      return;
    }

    const { name, age, email } = req.body;

    if (name) {
      users[index].name = name;
    }

    if (age) {
      users[index].age = age;
    }

    if (email) {
      users[index].email = email;
    }

    res.send(users[index]);
  }

  static destroy(req, res) {
    const userId = req.params.userId;

    const index = users.findIndex((register) => register.id === userId);

    if (index === -1) {
      res.status(404).send({ error: "user not found" });
      return;
    }

    const [deleted] = users.splice(index, 1);

    if (!deleted) {
      res.status(500).send({ error: "Error on delete the user" });
      return;
    }

    res.send("");
  }
}

module.exports = UserController;
