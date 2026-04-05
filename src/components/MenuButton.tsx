import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  duration?: number;
}

export const MenuButton = ({
  size = 40,
  className,
  duration = 500,
  ...props
}: MenuButtonProps) => {
  const move = size * 0.8;
  const dot = size * 0.12;

  return (
    <button
      style={
        {
          width: size,
          height: size,
          "--move": `${move}px`,
          "--dot": `${dot}px`,
          "--duration": `${duration}ms`,
        } as React.CSSProperties
      }
      className={cn("relative group", className)}
      {...props}
    >
      {/* top -> bottom */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-(--dot) h-(--dot) bg-black rounded-full
        transition-transform duration-(--duration)
        group-hover:translate-y-(--move)"
      />

      {/* left -> right */}
      <span
        className="absolute top-1/2 left-0 -translate-y-1/2
        w-(--dot) h-(--dot) bg-black rounded-full
        transition-transform duration-(--duration)
        group-hover:translate-x-(--move)"
      />

      {/* center */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-(--dot) h-(--dot) bg-black rounded-full"
      />

      {/* right -> left */}
      <span
        className="absolute top-1/2 right-0 -translate-y-1/2
        w-(--dot) h-(--dot) bg-black rounded-full
        transition-transform duration-(--duration)
        group-hover:-translate-x-(--move)"
      />

      {/* bottom -> top */}
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-(--dot) h-(--dot) bg-black rounded-full
        transition-transform duration-(--duration)
        group-hover:-translate-y-(--move)"
      />
    </button>
  );
};
