import { Prisma } from "@prisma/client";

export class Posts implements Prisma.PostCreateInput {
    title: string;
    content: string;
    linkes?: number;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    userId: number;
    user: Prisma.UsersCreateNestedOneWithoutPostsInput;
}