import {schema} from 'normalizr';

export const companyProject = new schema.Entity('companyProjects');
export const companyProjects = new schema.Array(companyProject);