import { ComponentPropsWithRef } from "react";
import { cn } from "../../lib/utils";

type InputProps = ComponentPropsWithRef<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={cn(
        "border border-gray-600 py-3 px-4 font-medium rounded-lg  outline-none focus:border-gray-500",
        className
      )}
      autoComplete="off"
      {...rest}
    />
  );
}
