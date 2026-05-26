export const FONT_STORAGE_KEY = "liss-font-theme";
export const DEFAULT_FONT_THEME = "sf-ui";

export const FONT_THEMES = [
  { id: "roboto", label: "Roboto" },
  { id: "sf-ui", label: "SF UI Display" },
  { id: "montserrat", label: "Montserrat" },
];

export const FONT_ROLES = ["regular", "medium", "semibold", "bold"];

export function applyFontTheme(id) {
  const theme = FONT_THEMES.find((item) => item.id === id);
  const fontId = theme ? id : DEFAULT_FONT_THEME;
  document.documentElement.dataset.font = fontId;
  localStorage.setItem(FONT_STORAGE_KEY, fontId);
  return fontId;
}

export function getFontTheme() {
  return localStorage.getItem(FONT_STORAGE_KEY) || DEFAULT_FONT_THEME;
}

export function initFontTheme() {
  return applyFontTheme(getFontTheme());
}

export function cycleFontTheme() {
  const current = getFontTheme();
  const index = FONT_THEMES.findIndex((item) => item.id === current);
  const nextIndex = index === -1 ? 0 : (index + 1) % FONT_THEMES.length;
  return applyFontTheme(FONT_THEMES[nextIndex].id);
}

export function getFontThemeLabel(id) {
  return FONT_THEMES.find((item) => item.id === id)?.label ?? "SF UI Display";
}
