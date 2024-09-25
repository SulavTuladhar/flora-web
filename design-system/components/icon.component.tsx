import React, { ReactNode } from 'react'
import { cn } from '../core/tailwindMerge'
interface IconComponentProps {
    icon: ReactNode,
    className?: string
}
function IconComponent({icon, className}: Readonly<IconComponentProps>) {
  return (
    <div className={cn("px-4 py-2 rounded", {className})}>
      {icon}
    </div>
  )
}

export default IconComponent
