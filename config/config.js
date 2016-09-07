var env = require('./env');
var config = {
    redis: {
        port: 6379
    },

    session: {
        name: 'tdtoken',
        secret: '123456',
        cookie_time: 86400000
    }
};

if (env == 'development') {
    config.web_port = 7000;

    config.redis.host = 'localhost';
    config.redis.passwd = '';

    config.db = {
        name: 'qunmember',
        host: 'localhost',
        user: 'root',
        passwd: 'root',
        port: 3306
    };
} else if (env == 'production') {
    config.web_port = 7000;

    config.redis.host = 'localhost';
    config.redis.passwd = '';

    config.db = {
        name: 'qunmember',
        host: 'localhost',
        user: 'root',
        passwd: 'root',
        port: 3306
    };
}

module.exports = config;
