import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutEntity } from './workout.entity';
import { SetExerciseEntity } from './set_exercise.entity';
import { CustomBaseEntity } from './customBaseEntity.entity';

@Entity({ name: 'exercise' })
export class ExerciseEntity extends CustomBaseEntity {
  @Column('varchar', { nullable: true, length: 255, name: 'name' })
  name!: string;

  @ManyToOne(() => WorkoutEntity, (workoutEntity) => workoutEntity.id)
  workout: WorkoutEntity;

  @OneToMany(
    () => SetExerciseEntity,
    (setExerciseEntity) => setExerciseEntity.exercise,
  )
  setExercise: SetExerciseEntity[];
}
