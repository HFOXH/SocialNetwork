import { PrismaService } from "src/prisma.service";
import { Posts } from "./posts.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(): Promise<Posts[]> {
    const prismaPosts = await this.prisma.post.findMany({
      include: { user: true },
    });

    const posts: Posts[] = prismaPosts.map((prismaPost) => {
      return {
        ...prismaPost,
        user: prismaPost.user as any, 
      };
    });

    return posts;
  }

  async createPosts(data: Posts): Promise<Posts> {
    const { userId, user, ...postData } = data;

    const createdPost = await this.prisma.post.create({
        data: {
            ...postData,
            userId: userId,
        },
        include: { user: true },
    });

    return {
        ...createdPost,
        user: createdPost.user as any, 
    };
}
  
}
