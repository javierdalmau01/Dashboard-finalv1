export const metadata = {
  title: 'Dashboard Cripto Completo',
  description: 'Versión con todos los datos integrados'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}