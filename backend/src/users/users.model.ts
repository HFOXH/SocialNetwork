import { Prisma } from "@prisma/client";

export class Users implements Prisma.UsersCreateInput{
    name: string;
    age: number;
    email: string;
    password: string;
}