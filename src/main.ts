/* import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';

const server = express();

const promiseApplicationReady = NestFactory.create(
  AppModule,
  new ExpressAdapter(server),
).then((app) => {
  app.init();
  app.enableCors();
});

export const api = functions
  .region('asia-northeast1')
  .https.onRequest(async (...args) => {
    await promiseApplicationReady;
    server(...args);
  });
 */

import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolver';
import { typeDefs } from './typeDefs';
import express from 'express';
import * as functions from 'firebase-functions';

const app = express();

// サーバーを起動する
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

server.start().then(() => {
  server.applyMiddleware({ app, path: '/' });
});

exports.graphql = functions.region('asia-northeast1').https.onRequest(app);
