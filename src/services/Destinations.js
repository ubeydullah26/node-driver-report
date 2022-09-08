const Destination = require('../models/Destinations');

const list = (where) => {
    return Destination.find(where || {}).populate({
        path: 'userId',
        select: 'name surname no'
    }).populate({
        path: 'tourId',
        select: 'no',
        populate: [
            {
                path: 'reportId',
                select: 'startTime endTime startKm endKm'
            },
            {
                path: 'truckId',
                select: 'no'
            }
        ]
    }).sort({
        createdAt: -1
    }).exec();
};

const insert = (data) => {
    const reports = new Destination(data);
    return reports.save();
}

const modify = (id, data) => {
    return Destination.findByIdAndUpdate(id, data, {new: true});
}

const remove = (id) => {
    return Destination.findByIdAndRemove(id);
}

module.exports = {
    list,
    insert,
    modify,
    remove
}