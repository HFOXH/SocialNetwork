import { Module } from '@nestjs/common';
import { usersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [usersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
