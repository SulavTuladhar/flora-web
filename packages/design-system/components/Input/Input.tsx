import { Input } from "@nextui-org/input";
import React, { ChangeEventHandler, ReactNode } from "react";

export interface InputProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label: ReactNode | string;
  className?: string;
  placeholder?: string;
  errorMessage: ReactNode;
  isInvalid: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  labelPlacement?: "inside" | "outside" | "outside-left";
  isRequired?: boolean;
  isReadOnly?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onValueChange: (value: string) => void;
  value: string;
  name: string;
}

function InputComponent({
  variant = "flat",
  color = "default",
  size = "md",
  radius = "sm",
  label,
  className,
  placeholder,
  errorMessage,
  isInvalid,
  startContent,
  endContent,
  fullWidth = false,
  labelPlacement = "inside",
  isRequired = false,
  isReadOnly = false,
  onChange,
  onValueChange,
  value,
  name,
}: InputProps) {
  return (
    <Input
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      label={label}
      className={className}
      placeholder={placeholder}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      startContent={startContent}
      endContent={endContent}
      fullWidth={fullWidth}
      labelPlacement={labelPlacement}
      isRequired={isRequired}
      onChange={onChange}
      onValueChange={onValueChange}
      isReadOnly={isReadOnly}
      value={value}
      name={name}
    />
  );
}

export default InputComponent;
