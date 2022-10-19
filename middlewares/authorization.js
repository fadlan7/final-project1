const db = require('../config/db');

async function authorization(req, res, next) {
  const reflectionId = req.params.id;
  const authenticatedUser = res.locals.user;

  // console.log(reflectionId);

  try {
    const findReflection = await db.query(
      `SELECT * FROM reflections WHERE id='${reflectionId}'`
    );

    // console.log(findReflection.rows == 0);

    if (findReflection.rows == 0) {
      return res
        .status(404)
        .json({
          message: `Reflection with id='${reflectionId}' not found in database`,
        });
    }

    // console.log(authenticatedUser);

    if (findReflection.rows[0].owner_id === authenticatedUser.rows[0].id) {
      return next();
    } else {
      return res.status(403).json({
        message: `User with email ${authenticatedUser.rows[0].email} does not have permission to access reflection with id ${reflectionId} `,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authorization;
