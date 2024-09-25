import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  console.log({ inputs });
  return twMerge(clsx(inputs));
};
