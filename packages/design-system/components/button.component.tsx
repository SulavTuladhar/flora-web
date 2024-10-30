import { cn } from "@/packages/core/tailwindMerge";
import { Button } from "@nextui-org/button";
import { ReactNode } from "react";
export interface ButtonProps {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  radius?: "full" | "lg" | "md" | "sm" | "none";
  isLoading?: boolean;
  customSpinner?: ReactNode;
  endContent?: ReactNode;
  startContent?: ReactNode;
  classname?: string;
  label: string;
  onClick: (e: any) => void;
}
export default function ButtonComponent({
  variant = "solid",
  isDisabled = false,
  size = "md",
  radius = "sm",
  isLoading = false,
  customSpinner = undefined,
  endContent = undefined,
  startContent = undefined,
  classname,
  label,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <Button
      isDisabled={isDisabled}
      size={size}
      variant={variant}
      radius={radius}
      isLoading={isLoading}
      spinner={customSpinner}
      endContent={endContent}
      startContent={startContent}
      className={cn("px-4 py-2 ", classname)}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
