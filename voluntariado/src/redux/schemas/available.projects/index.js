import {schema} from 'normalizr';

export const availableProject = new schema.Entity('availableProjects');
export const availableProjects = new schema.Array(availableProject);

export const recommendedProject = new schema.Entity('recommendedProjects');
export const recommendedProjects = new schema.Array(recommendedProject);