import { Column, Entity, ManyToOne } from 'typeorm';
import { ExerciseEntity } from './exercise.entity';
import { CustomBaseEntity } from './customBaseEntity.entity';

@Entity({ name: 'set' })
export class SetEntity extends CustomBaseEntity {
  @Column('varchar', { nullable: true, length: 255, name: 'type' })
  type!: string;
}
