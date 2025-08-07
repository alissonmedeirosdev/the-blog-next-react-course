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

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
          />
        </Link>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          laboriosam saepe commodi libero ipsa consequuntur, et ipsam nihil quam
          illo, reiciendis illum hic, eligendi itaque fugiat expedita eaque
          similique animi.
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
