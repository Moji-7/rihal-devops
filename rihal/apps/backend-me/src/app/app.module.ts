import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { OrderEntity } from './order.entity';

// import { OrderEntity } from './models/order.entity';
// import { ProductEntity } from './models/product.entity';

@Module({
  imports: [

  //  TypeOrmModule.forFeature([ProductEntity,OrderEntity]),
    TypeOrmModule.forRoot({
    type :"sqlite",
    database: "shoppingDB",
    //entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    entities:[ProductEntity,OrderEntity],

    //entities: ['dist/**/*.entity{.ts,.js}'],
   // autoLoadEntities:true,
    synchronize: true
  }),
   TypeOrmModule.forFeature([ProductEntity,OrderEntity])
],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService]
})
export class AppModule {}
