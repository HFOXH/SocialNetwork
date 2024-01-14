import { PostsService } from './posts.service';
import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Posts } from './posts.model';

@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostsService){}

    @Get('')
    async getAllPosts(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
            const result = await this.postsService.getAllPosts();
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

    @Post('save')
    async createPost(@Body() postData: Posts, @Res() response: Response): Promise<any> {
        try {
            const createdPost = await this.postsService.createPosts(postData);
            return response.status(201).json({
                status: 'Created!',
                message: 'Post created successfully!',
                result: createdPost
            });
        } catch (e) {
            return response.status(500).json({
                status: 'Error!',
                message: 'Internal Server Error!',
                result: e
            });
        }
    }

}