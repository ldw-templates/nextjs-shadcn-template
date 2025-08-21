"use client";

import { useTranslations } from "next-intl";
import { useAppStore } from "@/providers/store-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/theme-button";
import { LanguageSelector } from "@/components/language-selector";
import { Minus, Plus, ExternalLink, Github, Home } from "lucide-react";

export function DemoCard() {
  const t = useTranslations("HomePage");
  const { count, incrementCount, decrementCount } = useAppStore(
    (state) => state
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Features Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {t("features.title")}
            </CardTitle>
            <div className="flex items-center gap-2">
              <ThemeButton />
              <LanguageSelector />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p>{t("features.theming")}</p>
              <p>{t("features.i18n")}</p>
              <p>{t("features.state")}</p>
            </div>
            <div className="space-y-2">
              <p>{t("features.ui")}</p>
              <p>{t("features.typescript")}</p>
              <p>{t("features.tailwind")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Zustand Demo Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t("demo.title")}</CardTitle>
          <CardDescription>{t("demo.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-bold text-primary">{count}</div>
            <div className="flex items-center gap-4">
              <Button
                onClick={decrementCount}
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <Minus className="h-4 w-4" />
                {t("demo.decrement")}
              </Button>
              <Button
                onClick={incrementCount}
                size="lg"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                {t("demo.increment")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              This counter demonstrates Zustand state management with proper SSR
              support and per-request store isolation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Creator Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t("creator.title")}</CardTitle>
          <CardDescription>
            <strong>{t("creator.name")}</strong> - {t("creator.description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://ldwid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              <Home className="h-4 w-4" />
              {t("creator.homepage")}
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/LikeDreamwalker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              {t("creator.github")}
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/ldw-templates/nextjs-shadcn-template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              {t("creator.repository")}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
