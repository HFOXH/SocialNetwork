import { PrismaService } from "src/prisma.service";
import { Users } from "./users.model";
import { ConflictException, Injectable } from "@nestjs/common";


@Injectable()
export class UsersService{
    constructor(private prisma: PrismaService){}

    async getUserById(id: string): Promise<Users> {
        const user = await this.prisma.users.findUnique({
            where: {
                id: parseInt(id, 10),
            },
        });

        if (!user) {
            throw new ConflictException('User not found');
        }

        return user;
    }

    async getAllUser():Promise<Users[]>{
        return this.prisma.users.findMany()
    }

    async createUser(data:Users): Promise<Users>{
        const existing = await this.prisma.users.findUnique({
            where:{
                email: data.email
            }
        })

        if(existing){
            throw new ConflictException('email already exists')
        }

        return this.prisma.users.create({data})
    }
}