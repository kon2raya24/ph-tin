
// Type exports for consumers
// Add specific types as needed
/**
 * generateRandomTIN
 */
export function generateRandomTIN(): string {
  const tin = Array.from({length: 12}, () => Math.floor(Math.random() * 10)).join("");
  return formatTIN(tin);
}
