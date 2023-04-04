import { useEffect, useState } from "react";
import { isBrowser } from "src/utils/helpers";

const THEME_STORAGE_VAR = "preferred-theme";

export enum Themes {
  Dark = "dark",
  Light = "light",
  NoPreference = "no-preference",
}

interface UsePreferredTheme {
  currentTheme: Themes;
  updateTheme: (newTheme: Themes) => void;
}

export const usePreferredTheme = (): UsePreferredTheme => {
  const [currentTheme, setCurrentTheme] = useState<Themes>(() => {
    if (!isBrowser()) {
      return Themes.NoPreference;
    }

    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isLight = window.matchMedia("(prefers-color-scheme: light)");

    if (isDark.matches) {
      return Themes.Dark;
    }

    if (isLight.matches) {
      return Themes.Light;
    }

    return Themes.NoPreference;
  });

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME_STORAGE_VAR);

    if (localTheme) {
      setCurrentTheme(localTheme as Themes);
      document.body.dataset.theme = localTheme;

      return;
    }

    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    const isLight = window.matchMedia("(prefers-color-scheme: light)");

    if (typeof isLight.addEventListener === "function") {
      const darkListener = ({ matches }: MediaQueryListEvent) => {
        if (matches) {
          document.body.dataset.theme = Themes.Dark;
          setCurrentTheme(Themes.Dark);
        }
      };

      const lightListener = ({ matches }: MediaQueryListEvent) => {
        if (matches) {
          document.body.dataset.theme = Themes.Light;
          setCurrentTheme(Themes.Light);
        }
      };

      isDark.addEventListener("change", darkListener);
      isLight.addEventListener("change", lightListener);

      return () => {
        isDark.removeEventListener("change", darkListener);
        isLight.removeEventListener("change", lightListener);
      };
    }

    // Legacy support for browsers that don't utilize new listeners for matchMedia
    if (typeof isLight.addListener === "function") {
      const listener = () =>
        setCurrentTheme(() => {
          if (isDark.matches) {
            return Themes.Dark;
          }

          if (isLight.matches) {
            return Themes.Light;
          }

          return Themes.NoPreference;
        });

      isDark.addListener(listener);
      isLight.addListener(listener);

      return () => {
        isDark.removeListener(listener);
        isLight.removeListener(listener);
      };
    }

    return;
  }, []);

  const updateTheme = (newTheme: Themes) => {
    window.localStorage.setItem(THEME_STORAGE_VAR, newTheme);
    document.body.dataset.theme = newTheme;
    setCurrentTheme(newTheme);
  };

  return { currentTheme, updateTheme };
};
