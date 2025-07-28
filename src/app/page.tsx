import clsx from "clsx";

export default function HomePage() {
  return (
    <h1
      className={clsx(
        "text-6xl",
        "text-blue-500",
        "font-bold",
        "houver:text-blue-50"
      )}
    >
      Olá, Mundo!
    </h1>
  );
}
