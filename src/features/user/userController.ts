import { JsonController, Get, Param } from 'routing-controllers';
import Logger from 'jet-logger';
@JsonController('/users')
export class UserController {
  @Get('/:id')
  getOne(@Param('id') id: number) {
    Logger.info(`/users/${id} called`);
    return {
      message: `get one user route called with id: ${id}`,
    };
  }
}
