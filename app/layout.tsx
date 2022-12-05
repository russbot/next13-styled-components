import RootStyleRegistry from './RootStyleRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
          <RootStyleRegistry>
            {children}
          </RootStyleRegistry>
        </body>
    </html>
  )
}