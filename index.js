/**
 * Reverse Polish Notation (RPN) Calculator Task
 *
 * Context:
 * Reverse Polish Notation (RPN) is a mathematical notation in which every operator follows
 * all of its operands.
 *
 * Task:
 * Implement a function `evaluateRPN(expression)` that takes a string containing a space-separated RPN expression
 * and returns the numerical result.
 *
 * Requirements:
 * 1. Support the following operators: +, -, *, /
 * 2. Input will be a valid RPN expression containing only integers and operators
 * 3. Division should be integer division (e.g., 5 / 2 should return 2)
 * 4. Handle negative numbers correctly
 *
 * Example usage:
 * evaluateRPN("3 4 +")        // returns 7
 * evaluateRPN("15 7 1 1 + - / 3 * 2 1 1 + + -") // returns 5
 * evaluateRPN("2 3 ^")        // returns 8 (bonus)
 */
