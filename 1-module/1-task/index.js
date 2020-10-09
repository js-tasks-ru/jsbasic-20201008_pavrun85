/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  if (n === 0) return 1
  let mul = 1
  for (let i = 2; i <= n; i++) {
    mul *= i
  }
  return mul
}
