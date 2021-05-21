const User = require("../models/user.model.js");

exports.findAllUsers = (req, res) => {
    User.getAll((err, document) => {
        if (err)
            if (err.status === 204) {
                res.status(err.status)
                res.render('error', { message: "No Content", error: { status: err.status } })
            } else {
                res.status(err.status)
                res.render('error', { message: "Something went wrong", error: err })
            }
        else
            res.render('output', { response: JSON.stringify(document) })
    })
}

exports.createUser = (req, res) => {
    var new_user = new User(req.body)
    if (new_user.userName == null) {
        res.status(403)
        res.render('error', { message: "userName is required", error: { status: 403 } })        
    } else {
        User.getByUserName(new_user.userName, (err, existing_user) => {
            if (existing_user) {
                res.status(403)
                res.render('error', { message: "UserName already exists", error: { status: 409 } })
            } else {
                User.createNew(new_user, (err, document) => {
                    if (err) {
                        res.status(err.status)
                        res.render('error', { message: "Something went wrong", error: err })
                    } else
                        res.render('output', { response: JSON.stringify(document) })
                })
            }
        })
    }
}

exports.findUser = (req, res) => {
    User.getByUserName(req.params.userName, (err, document) => {
        if (err)
            if (err.status === 204) {
                res.status(err.status)
                res.render('error', { message: "No Such User", error: { status: err.status } })
            } else {
                res.status(err.status)
                res.render('error', { message: "Something went wrong", error: err })
            }
        else
            res.render('output', { response: JSON.stringify(document) })
    })
}

exports.deleteUser = (req, res) => {
    User.deleteByUserName(req.params.userName, (err, document) => {
        if (err)
            if (err.status === 204) {
                res.status(err.status)
                res.render('error', { message: "No Such User", error: { status: err.status } })
            } else {
                res.status(err.status)
                res.render('error', { message: "Something went wrong", error: err })
            }
        else
            res.render('output', { response: JSON.stringify(document) })
    })
}

exports.updateUser = (req, res) => {
    if (req.body.userName) {
        User.getByUserName(req.body.userName, (err, existing_user) => {
            if (existing_user) {
                res.status(409)
                res.render('error', { message: "UserName already exists", error: { status: 409 } })
            }
        })
    }
    
    User.updateByUserName(req.params.userName, req.body, (err, document) => {
        if (err)
            if (err.status === 204) {
                res.status(err.status)
                res.render('error', { message: "No Such User", error: { status: err.status } })
            } else {
                res.status(err.status)
                res.render('error', { message: "Something went wrong", error: err })
            }
        else
            res.render('output', { response: JSON.stringify(document) })
    })
}
