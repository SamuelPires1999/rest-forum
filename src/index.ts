import { RestServer } from './server';

const main = async () => {
  const server = new RestServer();
  server.start(3000);
};

main().catch(err => {
  console.log(err);
});
