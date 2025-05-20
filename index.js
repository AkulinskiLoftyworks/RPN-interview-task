/**
 * Reverse Polish Notation (RPN) Calculator Task
 *
 * Context:
 * Reverse Polish notation (RPN) is a method for representing expressions in which
 * the operator symbol is placed after the arguments being operated on.
 * RPN has the property that brackets are not required to represent the order of evaluation or grouping of the terms. 
 * RPN expressions are simply evaluated from left to right and this greatly simplifies the computation of the expression within computer programs. 
 * As an example, the arithmetic expression (3+4)×5 can be expressed in RPN as 3 4 + 5 *.
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
 * evaluateRPN("10 5 -")       // returns 5 (10 - 5, not 5 - 10)
 * evaulateRPN("3 4 + 5 *")    // return 35
 * evaluateRPN("15 7 1 1 + - / 3 * 2 1 1 + + -") // returns 5
 * 
 * Hint:
 * Think about how you would evaluate the expression manually, step by step, processing left to right.
 * You’ll need to keep track of values that haven’t been used yet, and apply each operator to the right operands.
 * Be especially careful with non-commutative operators like '-' and '/'.
 */
