import {
  BaseEntity,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class CustomBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @CreateDateColumn({ select: false, name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ select: false, name: 'updatedAt' })
  updatedAt: Date;

  @DeleteDateColumn({ select: false, name: 'deletedAt' })
  deletedAt: Date;
}
