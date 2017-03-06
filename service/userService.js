
const BaseService = require('./baseService');
const UserModel = require('../middleware/model')('UserModel');

class UserService extends BaseService {
    async test() {
        return 'this is a test'
    }
}
const userService = new UserService(UserModel);
module.exports = userService;