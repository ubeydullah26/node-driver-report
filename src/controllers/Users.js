const {insert, list, modify, remove, loginUser} = require('../services/Users');
const reportService = require('../services/Reports');
const tourService = require('../services/Tours');
const destinationService = require('../services/Destinations');
const httpStatus = require('http-status');
const {passwordHash, generateAccessToken, generateRefreshToken, comparePassword} = require('../scripts/utils/helper');

const index = (req, res) => {
    list().then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const create = (req, res) => {
    req.body.password = passwordHash(req.body.password);
    insert(req.body).then(response => {
        res.status(httpStatus.CREATED).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}

const update = (req, res) => {
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({message: 'id is required'});
    }
    modify(req.params?.id, req.body).then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}

const destroy = (req, res) => {
    if(!req.params?.id){
        return res.status(httpStatus.BAD_REQUEST).send({message: 'id is required'});
    }
    remove(req.params?.id).then(response => {
        res.status(httpStatus.OK).send({message: 'User deleted'});
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    })
}

const login = (req, res) => {
    loginUser(req.body.no).then(user => {
        if(user) {
            if(comparePassword(req.body.password, user.password)){
                user = {
                    ...user.toObject(),
                    tokens: {
                        accessToken: generateAccessToken(user),
                        refreshToken: generateRefreshToken(user)
                    }
                };
                delete user.password;
                res.status(httpStatus.OK).send(user);
            }
            else {
                res.status(httpStatus.UNAUTHORIZED).send({message: 'Invalid password'});
            }
        } else {
            res.status(httpStatus.UNAUTHORIZED).send({message: 'Invalid email'});
        }
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const reportList = (req, res) => {
    reportService.list({userId: req.user?._id}).then(reports => {
        res.status(httpStatus.OK).send(reports);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const tourList = (req, res) => {
    tourService.list({userId: req.user?._id}).then(reports => {
        res.status(httpStatus.OK).send(reports);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const destinationList = (req, res) => {
    destinationService.list({userId: req.user?._id}).then(reports => {
        res.status(httpStatus.OK).send(reports);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

module.exports = {
    index,
    create,
    update,
    destroy,
    login,
    reportList,
    tourList,
    destinationList
}