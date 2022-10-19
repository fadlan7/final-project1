const db = require('../config/db');
const { verifyToken } = require('../helpers/jwt');

async function authentication(req, res, next) {
  try {
    const token = req.get('x-access-token');
    const userDecoded = verifyToken(token);
    // console.log(userDecoded);

    let user = await db.query(
      'SELECT id,email FROM users WHERE id=$1 AND email= $2',
      [userDecoded.id, userDecoded.email]
    );

    // console.log(user);

    if (!user) {
      return res.status(404).json({
        message: `User with email ${userDecoded.email} not found in database`,
      });
    }

    res.locals.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authentication;
