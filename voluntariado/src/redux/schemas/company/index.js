import {schema} from 'normalizr';

export const company = new schema.Entity('companies');
export const companies = new schema.Array(company);