import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme-provider";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import "./globals.css";
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CounterStoreProvider>{children}</CounterStoreProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
