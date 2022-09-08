const Truck = require('../models/Trucks');

const list = () => {
    return Truck.find({});
};

const insert = (data) => {
    const trucks = new Truck(data);
    return trucks.save();
}

const modify = (id, data) => {
    return Truck.findByIdAndUpdate(id, data, {new: true});
}

const remove = (id) => {
    return Truck.findByIdAndRemove(id);
}

module.exports = {
    list,
    insert,
    modify,
    remove
}