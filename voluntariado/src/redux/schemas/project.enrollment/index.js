import {schema} from 'normalizr';

export const projectEnrollment = new schema.Entity('projectsEnrollment');
export const projectsEnrollment = new schema.Array(projectEnrollment);