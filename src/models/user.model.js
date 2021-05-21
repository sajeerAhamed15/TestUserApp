const db = require('../../config/db');

const User = (user) => {
    this.userName = user.userName;
    this.givenName = user.givenName;
    this.surName = user.surName;
    this.DOB = user.DOB;
}

User.getAll = (result) => {
    db.find({}, (err, users) => {
        if (err !== undefined) {
            result(err, null);
        } else if (!users.length) {
            const err = new Error('No Users');
            err.status = 204;
            result(err, null);
        } else {
            result(null, users);
        }
    });
}

User.createNew = (new_user, result) => {
    db.insert(new_user, (err, user) => {
        if (err !== undefined) {
            result(err, null);
        } else {
            result(null, user);
        }
    });
}

User.getByUserName = (userName, result) => {
    db.find({ "userName": userName }, (err, user) => {
        if (err !== undefined) {
            result(err, null);
        } else if (!user.length) {
            const err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, user);
        }
    });
}

User.deleteByUserName = (userName, result) => {
    db.remove({ "userName": userName }, (err, success) => {
        if (err !== undefined) {
            result(err, null);
        } else if (success == 0) {
            const err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, success);
        }
    });
}

User.updateByUserName = (userName, body, result) => {
    db.update({ "userName": userName }, { $set: body }, (err, user) => {
        if (err !== undefined) {
            result(err, null);
        } else if (!user.length) {
            const err = new Error('No Such User');
            err.status = 204;
            result(err, null);
        } else {
            result(null, user);
        }
    });
}

module.exports = User;
