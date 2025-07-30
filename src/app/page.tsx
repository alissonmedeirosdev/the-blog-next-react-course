import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <h1>Header</h1>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <h1>Footer</h1>
    </div>
  );
}
