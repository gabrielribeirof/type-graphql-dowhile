import 'dotenv/config'
import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { ObjectId } from 'mongodb';

import VideoResolver from '../../modules/videos/resolvers/video.resolver';
import CategoryResolver from '../../modules/categories/resolvers/category.resolver';

import { ObjectIdScalar } from './types/object-id.scalar';

import '../infra/database/connection';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver, CategoryResolver],
    emitSchemaFile: true,
    scalarsMap: [{
      type: ObjectId,
      scalar: ObjectIdScalar
    }],
    validate: true
  });

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen(4100);
  console.log(`🚀 Server started on ${url}`);
}

bootstrap();
