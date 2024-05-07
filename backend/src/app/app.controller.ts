import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Post as PostData } from '@prisma/client';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { PostDto } from 'src/common/dto/post.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/posts')
  getPosts(): Promise<PostData[]> {
    return this.appService.getPosts();
  }

  @Post('/create')
  createPost(@Body() data: PostDto): Promise<PostData> {
    return this.appService.createPost(data);
  }

  @Patch('/update/:id')
  updatePost(
    @Body() data: PostDto,
    @Param('id') id: number,
  ): Promise<PostData> {
    return this.appService.updatePost(data, id);
  }

  @Delete('/delete/:id')
  deletePost(@Param('id') id: number): Promise<PostData> {
    return this.appService.deletePost(id);
  }
}
