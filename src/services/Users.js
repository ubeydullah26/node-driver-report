const User = require('../models/Users');

const list = () => {
    return User.find({});
};

const insert = (data) => {
    const user = new User(data);
    return user.save();
}

const modify = (id, data) => {
    return User.findByIdAndUpdate(id, data, { new: true });
}

const remove = (id) => {
    return User.findByIdAndRemove(id);
}

const loginUser = (loginData) => {
    return User.findOne({no: loginData,});
}


module.exports = {
    list,
    insert,
    modify,
    remove,
    loginUser,
}