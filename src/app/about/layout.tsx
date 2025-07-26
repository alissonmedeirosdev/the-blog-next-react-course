export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Aqui vem o layout do about</p>
      {children}
    </>
  );
}
