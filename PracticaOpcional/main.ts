import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "npm:express@4.18.2";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@8.0.3";
import { Query } from "./resolvers/query.ts";


const MONGO_URL = "mongodb+srv://alananconaortiz:12345@practicaoptional.8u5fio9.mongodb.net/practica?retryWrites=true&w=majority";
await mongoose.connect(MONGO_URL);
console.info("MongoDB connected");

const app = express();

app.listen(3000, ()=>{
    console.info("Server listeninng on port 3000")
});

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Mutation,
        Query,
    },
});

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);