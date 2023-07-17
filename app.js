const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const { resolvers } = require("./resolver");




const root = resolvers;
const PORT = 5000;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql: true
}))
app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
})