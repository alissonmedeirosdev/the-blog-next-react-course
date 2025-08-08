import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="block text-slate-300 text-sm/tight"
            dateTime="2025-08-07"
          >
            07/08/2025 20:00
          </time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet.</Link>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          laboriosam saepe commodi libero ipsa consequuntur, et ipsam nihil quam
          illo.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="font-bold text-6xl text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
