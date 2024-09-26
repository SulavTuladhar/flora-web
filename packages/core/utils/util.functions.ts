import { ObjectDto } from "../dtos/Object.dto";

export function isNotEmptyObject(obj: ObjectDto) {
  return (
    obj !== null ||
    obj !== undefined ||
    (typeof obj !== "object" && Object.keys(obj).length !== 0)
  );
}
