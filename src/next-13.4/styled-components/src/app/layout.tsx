import '@/styles/global.scss';
import { StyledComponentsRegistry } from '@/app/styling/registry';

export const metadata = {
  title: 'styled-components',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
      </body>
    </html>
  );
}