import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
  const classes = clsx("flex", "items-center", "justify-center", className);

  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-900 dark:border-slate-300 dark:border-t-transparent",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}
