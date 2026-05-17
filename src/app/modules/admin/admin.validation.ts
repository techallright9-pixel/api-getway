import { z } from 'zod';

const updateAdmin = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    department: z.string().optional(),
    designation: z.string().optional()
  })
});

export const AdminValidation = {
  updateAdmin
};
