import { z } from 'zod';
import { ValidationModel } from './validation-model';

export type FormModel = {
    name: string;
    dateOfBirth: string;
    place: string;
    status: string;
    errors?: ValidationModel[];
};

export const FormModelSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required' })
        .min(8, { message: 'Min 8 characters' }),
    dateOfBirth: z.string().min(1, { message: 'Date of Birth is required' }),
    status: z.string().min(1, { message: 'Status is required' }),
});
