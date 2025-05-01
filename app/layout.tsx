export const metadata = {
  title: 'Dashboard Cripto Real',
  description: 'Versión final lista para producción'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}