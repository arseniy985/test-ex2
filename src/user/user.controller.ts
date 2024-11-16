import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('issues/reset')
  async resetUserIssues(): Promise<number> {
    return await this.userService.resetUserIssues();
  }
}
