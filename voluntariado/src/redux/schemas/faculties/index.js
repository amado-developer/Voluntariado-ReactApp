import {schema} from 'normalizr';

export const faculty = new schema.Entity('faculties');
export const faculties = new schema.Array(faculty);