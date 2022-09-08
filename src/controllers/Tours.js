const {insert, list, modify, remove} = require('../services/Tours');
const httpStatus = require('http-status');

const index = (req, res) => {
    list().then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const create = (req, res) => {
    req.body.userId = req.user;
    insert(req.body).then(response => {
        res.status(httpStatus.CREATED).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const update = (req, res) => {
    if(!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: 'id is required'});
    }
    req.body.userId = req.user;
    modify(req.params?.id, req.body).then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

const destroy = (req, res) => {
    if(!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: 'id is required'});
    }
    remove(req.params?.id).then(response => {
        res.status(httpStatus.OK).send({message: 'Truck deleted'});
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
}

module.exports = {
    index,
    create,
    update,
    destroy
}