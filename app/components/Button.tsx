import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "outline" | "primary" | "hero";

type BaseButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps & {
    href?: undefined;
  };

type ButtonAsAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonProps & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center rounded-full border px-4 py-3 text-sm font-medium leading-none transition-colors focus-visible:outline-0 focus-visible:ring-4 focus-visible:ring-primary/10 active:translate-y-px";

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "border-black/10 text-black/80 hover:border-black/30 bg-white/50 ",
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
  hero:
    "border-white/30 bg-white/5 hover:bg-white/10"
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return <a className={classes} {...props} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button
      type={type}
      className={classes}
      {...buttonProps}
    />
  );
}
