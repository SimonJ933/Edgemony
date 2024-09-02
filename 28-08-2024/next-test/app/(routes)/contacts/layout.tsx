function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>CONTATTI</h1>
      {children}
    </div>
  );
}
export default Layout;
