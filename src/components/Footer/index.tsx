import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-16 text-center">
      <h1>
        <span>Copyright &copy; {new Date().getFullYear()} -</span>
        <Link href="/">The blog</Link>
      </h1>
    </footer>
  );
}
