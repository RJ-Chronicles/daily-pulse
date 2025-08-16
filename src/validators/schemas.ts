import { z } from 'zod';

export const postFeedSchema = z.object({
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' }),
});
