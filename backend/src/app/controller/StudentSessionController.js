import Student from '../models/Student';

class StudentSessionController {
  async show(req, res) {
    const { id } = await Student.findOne({
      where: { email: req.body.email },
    });

    if (!id)
      return res
        .status(400)
        .json({ error: 'Student Not Found or not available' });

    return res.json({ id });
  }
}

export default new StudentSessionController();
