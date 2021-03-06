import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('pessoas')
export default class Pessoa {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;  

  @Column()
  instagram: string;

  @Column()
  facebook: string;

  @Column()
  linkedin: string;
}