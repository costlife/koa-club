var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
module.exports = {
    username: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        default: '',
        validate: [validateEmail, '请输入正确的邮箱'],
    },
    date: {
        type: Date,
        default: new Date()
    }
}