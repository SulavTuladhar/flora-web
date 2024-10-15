export type InputSchema = {
  [key: string]: {
    type: "string" | "email" | "password" | "number" | "boolean" | "date";
    required: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
};
