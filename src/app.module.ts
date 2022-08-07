import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://leonardoprimieri:SLy1CL9geq5I9nzf@cluster0.wetsjgc.mongodb.net/test',
    ),
  ],
})
export class AppModule {}
