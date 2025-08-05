import clsx from "clsx";

type HeaderProps = {
  children: React.ReactNode;
};

export function Herader({ children }: HeaderProps) {
  return (
    <header>
      <h1 className={clsx()}>{children}</h1>;
    </header>
  );
}
