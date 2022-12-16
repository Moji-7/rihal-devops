import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { UserLikes } from '../user/userLikes.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "usersDb.db",
      //entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      entities:[User,UserLikes],
      //entities: ['dist/**/*.entity{.ts,.js}'],
     // autoLoadEntities:true,
      synchronize: true
    }),
    UserModule,
  ],
})
export class AppModule {}
