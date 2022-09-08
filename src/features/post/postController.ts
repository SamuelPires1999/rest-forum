import { Prisma } from '@prisma/client';
import { Body, Get, JsonController, Param, Post } from 'routing-controllers';
import { db } from '../../database';
import Logger from 'jet-logger';

@JsonController('/posts')
export class PostController {
  @Post()
  async createPost(@Body() { data }: Prisma.PostCreateArgs) {
    Logger.info('==== Creating post ====');
    const newPost = await db.post.create({ data });
    return {
      message: 'success',
      newPost,
    };
  }

  @Get('/all')
  async getAllPosts() {
    Logger.info('==== Get All posts ====');
    const posts = await db.post.findMany({ include: { reply: true } });
    return {
      message: 'success',
      posts,
    };
  }

  @Get('/all/clean')
  async getPostsWithoutReplies() {
    Logger.info('==== Get all posts without the reply ====');
    const posts = await db.post.findMany();
    return {
      message: 'success',
      posts,
    };
  }

  @Get('/:id')
  async getSinglePostById(@Param('id') id: number) {
    Logger.info('==== Get single post by ID ====');
    const post = await db.post.findUnique({ where: { id }, include: { reply: true } });
    return {
      message: 'success',
      post,
    };
  }

  @Post('/reply/:id')
  async replyToPost(@Body() { data }: Prisma.ReplyCreateArgs, @Param('id') id: number) {
    Logger.info(`==== Replying to post ${id} ====`);
    const newReply = await db.reply.create({
      data: {
        content: data.content,
        postId: id,
      },
    });
    return newReply;
  }
}
