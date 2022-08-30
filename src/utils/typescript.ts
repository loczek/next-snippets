export let isTs = false;
export const changeLang = (lang: "js" | "ts") => {
  isTs = lang === "js" ? false : true;
};
// these functions only return something in typescript
export const tsString = (s: string) => (isTs ? s : "");
export const tsImport = (s: string) => (isTs ? s : null);
export const tsSpace = () => (isTs ? "" : null);
export const tsType = (s: string) => (isTs ? ": " + s : "");
export const template = (s: string) => s.split("\n");
