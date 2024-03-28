import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateDTo } from '@modules/users/dto/create.dto';
import { UserDto } from '@modules/users/serializer/user.dto';
import { UsersService } from '@modules/users/users.service';

// api/users
@Controller()
@ApiTags('users')
export class UsersApiController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: CreateDTo })
  @ApiBody({ type: CreateDTo })
  async create(@Body() dto: CreateDTo): Promise<UserDto> {
    const user = await this.usersService.create(dto);
    return new UserDto(user);
  }

  @Get()
  async Hello() {
    return 'this is a test route for users module';
  }
}
