import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma.service";
import { JwtStrategy } from "./jwt.strategy";
import { UsersService } from "src/users/users.service";
import { usersModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
    usersModule,
    PassportModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions:{
            expiresIn: process.env.EXPIRES_IN
        }
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, PrismaService, JwtStrategy, UsersService],
    exports: [],
})
export class AuthModule{}