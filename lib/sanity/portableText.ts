type PortableTextSpan = {
  _type?: string;
  text?: string;
};

type PortableTextBlock = {
  _type?: string;
  children?: PortableTextSpan[];
};

export function portableTextToParagraphs(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((block: PortableTextBlock) => block && block._type === "block")
    .map((block: PortableTextBlock) =>
      (Array.isArray(block.children) ? block.children : [])
        .map((child: PortableTextSpan) => (typeof child?.text === "string" ? child.text : ""))
        .join("")
        .trim(),
    )
    .filter((paragraph: string) => paragraph.length > 0);
}

export function portableTextToText(value: unknown): string {
  return portableTextToParagraphs(value).join(" ");
}
