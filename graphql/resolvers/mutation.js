const channel = require('../../utils/pubsub')

const { User } = require('../../mongo/mongoSchema')

module.exports = {
    Mutation: {

        createUser: async (_, { input }) => {
            const newUser = new User(input);
            const data = await newUser.save();
            if (data) {
                channel.publish('NEW_USER',
                    data);
                return 1;
            } else {
                return 0;
            }
        }

    }
}