const BaseService = require('./baseService');
const BannerModel = require('../middleware/model')('BannerModel');

class BannerService extends BaseService {
}
const bannerService = new BannerService(BannerModel);
module.exports = bannerService;