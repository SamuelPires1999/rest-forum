import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import Logger from 'jet-logger';

export class RestServer extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  private setupControllers(): void {
    // super.addControllers() must be called, and can be passed a single controller or an array of
    // controllers. Optional router object can also be passed as second argument.
    super.addControllers(
      []
      /*, optional router here*/
      /* middleware that will apply to all controllers here */
    );
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.imp('Server listening on port: ' + port);
    });
  }
}
