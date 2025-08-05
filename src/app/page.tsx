import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="font-bold text-6xl text-center py-8">Header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="font-bold text-6xl text-center py-8">Footer</h1>
      </footer>
    </Container>
  );
}
