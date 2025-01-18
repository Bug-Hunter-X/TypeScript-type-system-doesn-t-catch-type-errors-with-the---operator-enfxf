# TypeScript Type System Issue with + Operator
This example demonstrates a subtle issue in TypeScript's type system.  While TypeScript is generally very good at catching type errors, it fails to catch cases where the + operator is used with a number and a string.  This can lead to runtime errors resulting in unexpected NaN (Not a Number) values.

The `bug.ts` file demonstrates the problem, and `bugSolution.ts` shows how to mitigate this using type guards or stricter type checking.