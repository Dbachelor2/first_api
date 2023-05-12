import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ length: 255 })
  username: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  is_active: number;

  @Column({ type: 'timestamp', default: () => new Date() })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => new Date() })
  updated_at: string;
}
