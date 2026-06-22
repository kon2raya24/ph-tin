
// Type exports for consumers
// Add specific types as needed
/**
 * validateTIN
 * @param tin
 */
export function validateTIN(tin: string): boolean {
  const cleaned = tin.replace(/[^0-9]/g, "");
  return /^\d{12}$/.test(cleaned);
}
