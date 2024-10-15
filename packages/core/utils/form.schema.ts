import { z } from "zod";
import { InputSchema } from "../types/form.schema.type";

const applyCommonValidations = (
  validator: z.ZodTypeAny,
  field: any
): z.ZodTypeAny => {
  if (field.type === "string" || field.type === "password") {
    if (field.minLength) {
      validator = (validator as z.ZodString).min(
        field.minLength,
        `Must be at least ${field.minLength} characters long`
      );
    }
    if (field.maxLength) {
      validator = (validator as z.ZodString).max(
        field.maxLength,
        `Must be at most ${field.maxLength} characters long`
      );
    }
  }

  if (field.type === "number") {
    if (field.min !== undefined) {
      validator = (validator as z.ZodNumber).min(
        field.min,
        `Must be greater than or equal to ${field.min}`
      );
    }
    if (field.max !== undefined) {
      validator = (validator as z.ZodNumber).max(
        field.max,
        `Must be less than or equal to ${field.max}`
      );
    }
  }

  return validator;
};

// Function to convert structure to zod schema
export const convertToZodSchema = (schema: InputSchema) => {
  const zodSchema: { [key: string]: z.ZodTypeAny } = {};

  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      const field = schema[key];
      let validator: z.ZodTypeAny;

      // Handle different types
      switch (field.type) {
        case "string":
          validator = z.string();
          break;
        case "email":
          validator = z.string().email();
          break;
        case "number":
          validator = z.number();
          break;
        case "boolean":
          validator = z.boolean();
          break;
        case "date":
          validator = z.date();
          break;
        default:
          throw new Error(`Unsupported type: ${field.type}`);
      }

      validator = applyCommonValidations(validator, field);

      if (field.required) {
        validator = validator.refine((val) => !!val, `${key} is required`);
      }

      zodSchema[key] = validator;
    }
  }

  return z.object(zodSchema);
};
