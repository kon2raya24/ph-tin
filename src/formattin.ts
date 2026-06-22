
// Type exports for consumers
// Add specific types as needed
/**
 * formatTIN
 * @param tin
 */
export function formatTIN(tin: string): string {
  const cleaned = tin.replace(/[^0-9]/g, "");
  if (cleaned.length !== 12) throw new Error("TIN must be 12 digits");
  return `${cleaned.slice(0,3)}-${cleaned.slice(3,6)}-${cleaned.slice(6,9)}-${cleaned.slice(9)}`;
}
