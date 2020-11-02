import {schema} from 'normalizr';

export const studentManager = new schema.Entity('studentsManager');
export const studentsManager = new schema.Array(studentManager);