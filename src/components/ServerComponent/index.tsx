import { ClientComponent } from "../ClientComponent";

export function ServerComponent() {
  console.log("Server Component");
  return (
    <>
      <ClientComponent />
      <div>Server Component</div>
    </>
  );
}
