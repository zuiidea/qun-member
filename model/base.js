var moment = require('moment');
var BaseModel = {
    inc: moment().valueOf(),
    uid: function() {
        var new_id = 0;
        new_id += moment().valueOf();
        this.inc += 1;
        new_id += this.inc;
        return new_id;
    },
    timestamp: function() {

    }
};

module.exports = BaseModel;
