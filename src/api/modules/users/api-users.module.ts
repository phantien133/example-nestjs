import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { RegisterDTo } from '@modules/users/dto/register.dto';
import { UserDto } from '@modules/users/dto/user.dto';
import { UsersService } from '@modules/users/users.service';

@Controller('users')
@ApiTags('users')
export class ApiUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  @ApiBody({ type: RegisterDTo })
  async create(@Body() userDto: RegisterDTo) {
    const user = await this.usersService.create(userDto);
    return new UserDto(user);
  }
}
