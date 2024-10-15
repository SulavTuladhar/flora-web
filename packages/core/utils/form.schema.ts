import { z } from "zod";

// Define the input structure
type InputSchema = {
  [key: string]: {
    type: string;
    required: boolean;
  };
};

// Function to convert structure to zod schema
const convertToZodSchema = (schema: InputSchema) => {
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

      // Apply required rule if necessary
      if (!field.required) {
        validator = validator.nullable();
      }

      zodSchema[key] = validator;
    }
  }

  return z.object(zodSchema);
};
