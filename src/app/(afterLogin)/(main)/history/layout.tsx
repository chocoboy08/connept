export default function HistoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-20">{children}</div>;
}
