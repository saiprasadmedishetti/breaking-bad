import { ComponentPropsWithRef } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ComponentPropsWithRef<"button">;
export default function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-green-600 text-white py-2 px-4 rounded-lg text-lg ",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
