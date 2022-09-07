import 'reflect-metadata';
import Logger from 'jet-logger';
import Express from 'express';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './features/user/userController';

const main = async () => {
  const app = Express();
  useExpressServer(app, {
    controllers: [UserController],
    routePrefix: '/api',
  });
  app.listen(3000, () => {
    Logger.imp('App listening on port 3000');
  });
};

main().catch(err => {
  Logger.err(err);
});
