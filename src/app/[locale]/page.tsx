import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ThemeButton } from "@/components/theme-button";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <ThemeButton />
    </div>
  );
}
