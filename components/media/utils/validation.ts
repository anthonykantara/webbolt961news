"use client";

export function validateFileName(name: string): boolean {
  // Remove file extension
  const baseName = name.split(".").slice(0, -1).join(".");
  
  // Check if name contains only valid characters
  const validNameRegex = /^[a-zA-Z0-9-_\s]+$/;
  return validNameRegex.test(baseName);
}

export function validateFileSize(size: number, maxSize: number = 10 * 1024 * 1024): boolean {
  return size <= maxSize;
}

export function validateImageDimensions(
  width: number,
  height: number,
  maxWidth: number = 5000,
  maxHeight: number = 5000
): boolean {
  return width <= maxWidth && height <= maxHeight;
}