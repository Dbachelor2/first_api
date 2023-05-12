import { DataSource } from 'typeorm';
import { dataSource } from './src/db/config';

export const connectionSource = new DataSource(dataSource);
