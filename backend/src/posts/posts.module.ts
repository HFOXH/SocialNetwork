import { PostsService } from './posts.service';
import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PrismaService } from "src/prisma.service";

@Module({
    controllers: [PostsController],
    providers: [PostsService,PrismaService]
})
export class postsModule{}