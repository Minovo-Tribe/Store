const Profile = require('../model/profile.model');
const Role = require('../model/role.model');
const User = require('../model/user.model');

exports.postCreateProfile = async (req, res, next) => {
  try {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl ? req.body.imageUrl : '';
    const email = req.jwtPayload.email;
    const user = new Profile({
      _id: req.jwtPayload.uid,
      name,
      imageUrl,
      email,
      status: true,
      isSeller: false,
    });
    await user.save();
    res.send('user added');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal error');
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const uid = req.jwtPayload.uid;
    const user = await Profile.findById(uid);
    if (!user) return res.sendStatus(404);
    res.send(user);
  } catch (error) {
    console.log(err);
    res.status(500).send('Internal error');
  }
};

exports.getUserState = (req, res, next) => {
  res.send({ uid: req.jwtPayload.uid, state: 'loggedIn', isLoggedIn: true });
};

exports.becomeSeller = async (req, res, next) => {
  try {
    if (req.role == Role.SELLER) res.sendStatus(400);
    const uid = req.jwtPayload.uid;
    const user = await User.findById(uid);
    const profile = await Profile.findById(uid);
    user.role = Role.SELLER;
    profile.isSeller = true;
    user.save();
    profile.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
