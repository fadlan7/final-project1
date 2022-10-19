const db = require('../config/db');
const datetime = require('../helpers/getDate');

class reflectionController {
  static async getAllReflections(req, res) {
    const userId = res.locals.user.rows[0].id;

    try {
      const reflectionDatas = await db.query(
        `SELECT * FROM reflections WHERE owner_id=${userId} ORDER BY id ASC;`
      );

      // console.log(reflectionDatas.rows);

      return res.status(200).json(reflectionDatas.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createOneReflection(req, res) {
    const { success, low_point, take_away } = req.body;
    const userId = res.locals.user.rows[0].id;

    try {
      await db.query(
        `INSERT INTO reflections(success, low_point, take_away, owner_id, created_date, modified_date) VALUES('${success}', '${low_point}', '${take_away}', '${userId}', '${datetime}' , '${datetime}');`
      );

      return res
        .status(201)
        .json({ message: 'success created one reflection' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateOneReflectionById(req, res) {
    const id = +req.params.id;
    const { success, low_point, take_away } = req.body;
    try {
      await db.query(
        `UPDATE reflections SET success='${success}', low_point='${low_point}', take_away='${take_away}',  modified_date='${datetime}' WHERE id='${id}'`
      );

      return res
        .status(201)
        .json({ message: `success edit one reflection with id=${id}` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteOneReflectionById(req, res) {
    const id = req.params.id;
    const userId = res.locals.user.rows[0].id;

    // console.log(userId);

    try {
      const reflectionData = await db.query(
        `DELETE FROM reflections WHERE id=${id} AND owner_id=${userId}`
      );

      return res
        .status(200)
        .json({ message: 'success deleted one reflection' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = reflectionController;
