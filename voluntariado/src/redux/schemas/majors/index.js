import {schema} from 'normalizr';

export const major = new schema.Entity('majors');
export const majors = new schema.Array(major);