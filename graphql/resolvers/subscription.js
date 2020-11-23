
const channel = require('../../utils/pubsub');

module.exports = {
    Subscription: {

        newUser: {
            subscribe: () => channel.asyncIterator('NEW_USER'),
            resolve: (payload) => {
                // Manipulate and return the new value
                const data = [{ name: "wilbert" }, { name: "otro" }]
                
                return data;
            },
        },

    }
}