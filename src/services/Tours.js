const Tour = require('../models/Tours');

const list = (where) => {
    return Tour.find(where || {}).populate({
        path: 'userId',
        select: 'name surname no'
    }).populate({
        path: 'reportId',
        select: 'startTime endTime startKm endKm'
    }).populate({
        path: 'truckId',
        select: 'no'
    }).sort({
        createdAt: -1
    }).exec();
};

const insert = (data) => {
    const reports = new Tour(data);
    return reports.save();
}

const modify = (id, data) => {
    return Tour.findByIdAndUpdate(id, data, {new: true});
}

const remove = (id) => {
    return Tour.findByIdAndRemove(id);
}

module.exports = {
    list,
    insert,
    modify,
    remove
}