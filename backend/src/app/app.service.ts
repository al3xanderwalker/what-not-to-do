import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post } from '@prisma/client';
import { PostDto } from 'src/common/dto/post.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  createPost(data: PostDto): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  updatePost(data: PostDto, id: number): Promise<Post> {
    return this.prisma.post.update({
      where: { id: id },
      data: { title: data.title, content: data.content },
    });
  }

  deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
