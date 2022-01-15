//imports
import {ApolloServer} from 'apollo-server-express';
import express from "express";
import {schema} from "./graphql";


//constants
const app = express();
const port = process.env.PORT || 9000;
//topware-middlewares

const server = new ApolloServer({schema});
server.start().then(()=>{
  server.applyMiddleware({app,path:'/api'});
  app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})});
