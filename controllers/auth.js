const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors/index');

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError('Please provide name, email, and password');
  // }

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(user);
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json(req.body);
};

module.exports = {
  register,
  login,
};
