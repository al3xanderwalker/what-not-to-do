import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  createPost(data: { title: string; content: string }): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  updatePost(data: {
    id: number;
    title: string;
    content: string;
  }): Promise<Post> {
    return this.prisma.post.update({
      where: { id: data.id },
      data: { title: data.title, content: data.content },
    });
  }

  deletePost(data: { id: number }): Promise<Post> {
    return this.prisma.post.delete({ where: { id: data.id } });
  }
}
