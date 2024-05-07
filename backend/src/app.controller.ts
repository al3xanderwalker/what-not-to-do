import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Post as PostData } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): Promise<PostData[]> {
    return this.appService.getPosts();
  }

  @Post()
  createPost(data: { title: string; content: string }): Promise<PostData> {
    return this.appService.createPost(data);
  }

  @Patch()
  updatePost(data: {
    id: number;
    title: string;
    content: string;
  }): Promise<PostData> {
    return this.appService.updatePost(data);
  }

  @Delete()
  deletePost(data: { id: number }): Promise<PostData> {
    return this.appService.deletePost(data);
  }
}
