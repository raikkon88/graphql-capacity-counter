import { Document } from 'mongoose';

export type CustomDocument<T, S> = Document &
    Omit<T, '_id'> & {
        format(): S;
    };
