const { ApolloServer } = require('apollo-server');
const { mongoConnect, schema, postgresConnect } = require('./utils/app');

const port = 3000;

mongoConnect().then(success => {
    console.log(success);
}).catch(err => {
    console.log(err);
});

postgresConnect().then(success => {
    console.log(success);
}).catch(err => {
    console.log(err);
});

const server = new ApolloServer({ schema: schema });

server.listen(port).then(() => console.log(`🚀 Server ready at ${port}`));

