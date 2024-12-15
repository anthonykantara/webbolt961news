export function validateSourceUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateSourceName(name: string): boolean {
  return name.trim().length >= 3;
}