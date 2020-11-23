const { User } = require('../../mongo/mongoSchema')
module.exports = {
    Query: {

        user: async () => {
            const data = await User.find();
            if (!data.length) {
                return []
            } else {
                return data
            }
        }

    }
}