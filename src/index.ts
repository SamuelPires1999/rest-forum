import 'reflect-metadata';
import Logger from 'jet-logger';
import Express from 'express';
import { useExpressServer } from 'routing-controllers';
import { PostController } from './features/post/postController';

const main = async () => {
  const app = Express();
  useExpressServer(app, {
    controllers: [PostController],
    routePrefix: '/api',
  });
  app.listen(3000, () => {
    Logger.imp('App listening on port 3000');
  });
};

main().catch(err => {
  Logger.err(err);
});
