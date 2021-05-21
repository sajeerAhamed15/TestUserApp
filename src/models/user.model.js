const db = require('../../config/db');

const User = function (user) {
    this.userName = user.userName;
    this.givenName = user.givenName;
    this.surName = user.surName;
    this.DOB = user.DOB;
}

User.getAll = (result) => {
    db.find({}, function (err, users) {
        if (err) {
            result(err, null);
        } else if (!users.length) {
            var err = new Error('No Users');
            err.status = 204;
            result(err, null);
        } else {
            result(null, users);
        }
    });
}

User.createNew = (new_user, result) => {
    db.insert(new_user, function (err, user) {
        if (err) {
            result(err, null);
        } else {
            result(null, user);
        }
    });
}


User.getByUserName = (userName, result) => {
    db.find({ "userName": userName }, function (err, user) {
        if (err) {
            result(err, null);
        } else if (!user.length) {
            var err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, user);
        }
    });
}

User.deleteByUserName = (userName, result) => {
    db.remove({ "userName": userName }, function (err, success) {
        if (err) {
            result(err, null);
        } else if (success == 0) {
            var err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, success);
        }
    });
}


User.updateByUserName = (userName, body, result) => {
    db.update({ "userName": userName }, { $set: body }, function (err, user) {
        if (err) {
            result(err, null);
        } else if (!user.length) {
            var err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, user);
        }
    });
}

module.exports = User;