/**
 * It takes a number and returns a string.
 * @param {number} price - number - The price to format
 * @returns A function that takes a number and returns a string.
 * @example formatPrice(100) // $100.00
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
