import {schema} from 'normalizr';

export const request = new schema.Entity('requests');
export const requests = new schema.Array(request);