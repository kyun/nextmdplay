type HTMLTag = "h1" | "h2" | "h3" | "h4" | "h5";
export function parseMarkdown(source: string[], target: HTMLTag): string[] {
  if (target === "h1") {
    return source.filter((t) => {
      return (
        t.includes("#") &&
        !t.includes("##") &&
        !t.includes("###") &&
        !t.includes("####") &&
        !t.includes("#####")
      );
    });
  }
  if (target === "h2") {
    return source.filter((t) => {
      return (
        t.includes("##") &&
        !t.includes("###") &&
        !t.includes("####") &&
        !t.includes("#####")
      );
    });
  }
  return [];
}
