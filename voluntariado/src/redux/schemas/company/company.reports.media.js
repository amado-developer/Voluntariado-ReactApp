import {schema} from 'normalizr';

export const companyProjectReportMedia = new schema.Entity('companyProjectReportsMedia');
export const companyProjectReportsMedia= new schema.Array(companyProjectReportMedia);