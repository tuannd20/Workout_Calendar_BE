import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseEntity } from './exercise.entity';
import { SetEntity } from './set.entity';

@Entity({ name: 'set_exercise' })
export class SetExerciseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column()
  exerciseId: number;

  @Column()
  setId: number;

  @ManyToOne(() => ExerciseEntity, (exerciseEntity) => exerciseEntity.id, {
    cascade: true,
  })
  exercise: ExerciseEntity;

  @ManyToOne(() => SetEntity, (setEntity) => setEntity.id, {
    cascade: true,
  })
  set: SetEntity;
}
