"use client";

import clsx from "clsx";

export function Herader() {
  return (
    <h1
      className={clsx(
        { "text-6xl": true },
        "text-blue-500",
        "font-bold",
        "hover:text-blue-50"
      )}
      onClick={() => alert("Olá Mundo!")}
    >
      Olá, Mundo!
    </h1>
  );
}
