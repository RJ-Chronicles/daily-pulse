import { NextFunction, Request, Response } from 'express';

import { RequestValidationError } from '../errors';
import { postFeedSchema } from './schemas';
import { SchemasListType } from '../types/type.td';
const schemaList = {
  postFeed: postFeedSchema,
};

export const validate =
  (name: SchemasListType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const schema = schemaList[name];

    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw new RequestValidationError(result.error.errors);
    }
    req.body = result.data; // parsed & typed
    next();
  };
