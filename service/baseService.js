class BaseService {
    constructor(props) {
        //super(props);
        this.model = props;
    }
    async getList(cursor = 0, limit = 20) {
        const count = await this.model.count({});
        const result = await this.model.find({}).skip(parseInt(cursor), 10).limit(limit);
        return {
            result: result,
            count: count,
        };
    }
    async getById(id) {
        const result = await this.model.find({
            uid: id
        });
        return result;
    }
    async add(info) {
        const entity = new this.model(info);
        let result = ''
        try {
            result = await entity.save();
        } catch (e) {
            let error = [];
            for (let prop in e.errors) {
                error.push(e.errors[prop].message);
            }
            result = {
                code: 1,
                error: error,
            }
        }
        return result;
    }
    async update(id, info) {
        const result = await this.model.update({
            _id: id
        }, info);
        return result;
    }
    async deleteById(id) {
        const result = await this.model.remove({
            _id: id
        });
        return result;
    }
}
module.exports = BaseService;