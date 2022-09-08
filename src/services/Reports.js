const Report = require('../models/Reports');

const list = (where) => {
    return Report.find(where || {}).populate({
        path: 'userId',
        select: 'name surname no'
    }).sort({
        createdAt: -1
    });
};

const insert = (data) => {
    const reports = new Report(data);
    return reports.save();
}

const modify = (id, data) => {
    return Report.findByIdAndUpdate(id, data, {new: true});
}

const remove = (id) => {
    return Report.findByIdAndRemove(id);
}

module.exports = {
    list,
    insert,
    modify,
    remove
}