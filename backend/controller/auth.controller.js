const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Role = require('../model/role.model');
const User = require('../model/user.model');

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const userDoc = await User.findOne({ email: email });
  if (!userDoc) return res.sendStatus(404);
  const match = await bcrypt.compare(password, userDoc.password);
  if (!match) return res.status(403).send('password not match.');
  const token = getToken(userDoc);
  res.cookie('ujt', token, { httpOnly: true });
  res.send({ uid: userDoc._id, state: 'loggedIn', isLoggedIn: true });
};

exports.postSignUp = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const role = Role.USER;
    const userDoc = await User.findOne({ email: email });
    if (userDoc) return res.send('user already exist');
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hashedPassword,
      role,
    });
    await user.save();
    postLogin(req, res, next);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

function getToken(user) {
  try {
    const payload = { uid: user._id };
    const options = { expiresIn: '2h' };
    const secret = 'my secret' + user.password;
    return jwt.sign(payload, secret, options);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

exports.validator = async (req, res, next) => {
  try {
    const bearer = req.cookies.ujt;
    const payload = jwt.decode(bearer);
    const user = await User.findById(payload.uid);
    var decoded = jwt.verify(bearer, 'my secret' + user.password);
    decoded.email = user.email;
    req.jwtPayload = decoded;
    req.role = user.role;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

exports.isSeller = async (req, res, next) => {
  if (req.role == Role.SELLER) next();
  res.sendStatus(401);
};
