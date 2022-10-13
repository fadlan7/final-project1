const db = require('../config/db');
const { generateToken } = require('../helpers/jwt');

class userController {
  static async register(req, res) {
    try {
      const { email, password } = req.body;

      await db.query(
        `INSERT INTO users (email, password) VALUES('${email}', '${password}');`
      );

      return res.status(201).json({ email, password });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const dataUser = await db.query(
        `SELECT * FROM users WHERE email='${email}' LIMIT 1;`
      );

      if (dataUser) {
        const isCorrectPassword = dataUser.rows[0].password == password;

        if (isCorrectPassword) {
          const token = generateToken({
            id: dataUser.rows[0].id,
            email: dataUser.rows[0].email,
          });

          res.status(200).json({ token: token });
        } else {
          res.status(401).json({ message: 'Wrong Password!' });
        }
      } else {
        res
          .status(402)
          .json({ message: `User with email ${email} does not match` });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = userController;
