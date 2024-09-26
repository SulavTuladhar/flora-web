import { cn } from "@/packages/core/tailwindMerge";
import React, { ReactNode } from "react";
interface IconComponentProps {
  icon: ReactNode;
  className?: string;
}
function IconComponent({ icon, className }: Readonly<IconComponentProps>) {
  return <div className={cn("px-4 py-2 rounded", { className })}>{icon}</div>;
}

export default IconComponent;
