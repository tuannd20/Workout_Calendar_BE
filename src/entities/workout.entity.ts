import { Column, Entity, OneToMany } from 'typeorm';
import { CustomBaseEntity } from './customBaseEntity.entity';
import { ExerciseEntity } from './exercise.entity';

@Entity({ name: 'workout' })
export class WorkoutEntity extends CustomBaseEntity {
  @Column('varchar', { nullable: true, length: 255, name: 'name' })
  name!: string;

  @Column({ type: 'timestamp', nullable: true, name: 'date' })
  date?: Date;

  @Column('int', { nullable: true, array: true })
  exerciseIds!: number[];

  // @OneToMany(() => ExerciseEntity, (exerciseEntity) => exerciseEntity.workout)
  // exercises: ExerciseEntity[];
}
