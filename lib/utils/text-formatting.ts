export function applyFormatting(text: string, selectionStart: number, selectionEnd: number, format: string, value?: string): string {
  const selectedText = text.slice(selectionStart, selectionEnd);
  const textBefore = text.slice(0, selectionStart);
  const textAfter = text.slice(selectionEnd);

  switch (format) {
    case "bold":
      return `${textBefore}**${selectedText}**${textAfter}`;
    case "italic":
      return `${textBefore}_${selectedText}_${textAfter}`;
    case "underline":
      return `${textBefore}<u>${selectedText}</u>${textAfter}`;
    case "h1":
      return `${textBefore}\n# ${selectedText}${textAfter}`;
    case "h2":
      return `${textBefore}\n## ${selectedText}${textAfter}`;
    case "h3":
      return `${textBefore}\n### ${selectedText}${textAfter}`;
    case "bullet":
      return `${textBefore}\n- ${selectedText}${textAfter}`;
    case "number":
      return `${textBefore}\n1. ${selectedText}${textAfter}`;
    case "link":
      return `${textBefore}[${selectedText}](${value})${textAfter}`;
    case "emoji":
      return `${textBefore}${value}${textAfter}`;
    default:
      return text;
  }
}

export function getSelectionInfo(element: HTMLTextAreaElement) {
  return {
    text: element.value,
    start: element.selectionStart,
    end: element.selectionEnd,
    selectedText: element.value.slice(element.selectionStart, element.selectionEnd)
  };
}

export function setSelection(element: HTMLTextAreaElement, start: number, end: number) {
  element.focus();
  element.setSelectionRange(start, end);
}