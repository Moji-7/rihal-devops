import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      //
      // locally database
      type: 'postgres',
      host: 'localhost', //configService.get<string>('DATABASE_HOST'),
      port: 5432, //parseInt(configService.get<string>('DATABASE_PORT')),
      username: 'postgres', //configService.get<string>('DATABASE_USER'),
      password: 'root', //configService.get<string>('DATABASE_PASS'),
      database: 'userdb', //configService.get<string>('DATABASE_NAME'),
      //entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,

      // // 1 elephentSQL
      // type: 'postgres',
      // url: 'postgres://kfawlatn:dUMCryTxhvULGBSAYPA-3pazDHSbE30k@dumbo.db.elephantsql.com/kfawlatn',
      //synchronize: true,
      // logging: true,
      //autoLoadEntities: true,
      entities: [User],
    }),
    UserModule,
  ],
})
export class AppModule {}
