import {schema} from 'normalizr';

export const companyProjectReport = new schema.Entity('companyProjectReports');
export const companyProjectReports= new schema.Array(companyProjectReport);