import { Entity, OneToMany, JoinColumn, OneToOne, Column, PrimaryGeneratedColumn } from 'typeorm'
import { ProductEntity } from './product.entity';


@Entity()
export class OrderEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @OneToMany(type => ProductEntity, item => item.id)
   items: ProductEntity[];

   @Column()
   subTotal: number

   @Column({ default: false })
   pending: boolean

}
