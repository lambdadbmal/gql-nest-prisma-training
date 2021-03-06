import { Int, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from './../prisma/prisma.service';
import { PostModel } from '@pb-components/posts/interfaces/post.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }

  @Query(() => [PostModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.post.findMany();
  }
}