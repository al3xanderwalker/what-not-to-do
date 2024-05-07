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

class PostDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): Promise<PostData[]> {
    return this.appService.getPosts();
  }

  @Post()
  createPost(@Body() data: PostDto): Promise<PostData> {
    return this.appService.createPost(data);
  }

  @Patch()
  updatePost(@Body() data: PostDto): Promise<PostData> {
    return this.appService.updatePost(data);
  }

  @Delete(':id')
  deletePost(@Param("id") id: number): Promise<PostData> {
    return this.appService.deletePost(id);
  }
}
