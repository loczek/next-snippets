export const t = (s: TemplateStringsArray) =>
  process.env.LANG === "ts" ? ": " + s.raw[0] : null;

export const tm = (s: TemplateStringsArray) =>
  process.env.LANG === "ts" ? s.raw[0] : null;

export const ti = (s: TemplateStringsArray) =>
  process.env.LANG === "ts" ? ", " + s.raw[0] : null;
