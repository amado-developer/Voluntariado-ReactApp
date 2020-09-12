import {schema} from 'normalizr';

export const availableProject = new schema.Entity('availableProjects');
export const availableProjects = new schema.Array(availableProject);