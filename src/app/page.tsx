import { SpinLoader } from "@/components/SpinLoader";

export default async function HomePage() {
  return (
    <div>
      <SpinLoader className="min-h-[500] bg-amber-500" />
    </div>
  );
}
