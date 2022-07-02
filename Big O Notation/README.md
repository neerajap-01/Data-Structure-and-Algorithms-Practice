
# BIG O NOTATION


## Objectives

- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is


# Time Complexity

## Big O Definition

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n  )
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!
## Big O Shorthands

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Big O Chart

![image](https://user-images.githubusercontent.com/88912160/176999598-91454e88-438b-4a17-80bb-d17a467ac983.png)

# Space Complexity

We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

## What about the inputs?

Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.


## Space Complexity in JS
### Rule of thumb

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
## Logarithm

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

![image](https://user-images.githubusercontent.com/88912160/176999630-09b92b8f-e51a-4629-b430-4d84a5a281d9.png)

## Recap

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!
