import { User } from 'src/users/entities/user.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  book_reference: string;

  @Column({ type: 'varchar', length: 500 })
  title: string;

  @Column({ type: 'longtext' })
  summary: string;

  @Column({ type: 'longtext' })
  content: string;

  @ManyToOne(type => Us)
}
