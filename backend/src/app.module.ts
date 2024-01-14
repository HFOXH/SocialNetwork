import { Module } from '@nestjs/common';
import { usersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { postsModule } from './posts/posts.module';

@Module({
  imports: [usersModule, AuthModule, postsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
