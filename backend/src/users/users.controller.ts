import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController{
    constructor(private readonly UserService: UsersService){}

    @Get('')
    async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
            const result = await this.UserService.getAllUser();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully fetch data!',
                result: result
            })
        } catch (e) {
            return response.status(500).json({
                status: 'Ok!',
                message: 'Internal Server Error!',
                result: e
            })
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id: string, @Res() response: Response): Promise<any> {
        try {
            const result = await this.UserService.getUserById(id);
            return response.status(200).json({
                status: 'Ok!',
                message: 'Successfully fetch user by ID!',
                result: result,
            });
        } catch (e) {
            return response.status(404).json({
                status: 'Error!',
                message: 'User not found!',
                result: e,
            });
        }
    }
}