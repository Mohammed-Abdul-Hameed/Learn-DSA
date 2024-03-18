# Complexity Analysis of Algorithms

## Introduction

- Complexity analysis is a fundamental concept in computer science to understand the efficiency of algorithms.
- It helps in predicting how the runtime or space requirements of an algorithm will grow as the size of the input increases.
- Understanding complexity helps in selecting the most efficient algorithm for a given problem.

## Asymptotic Notation

- Asymptotic Notations are the mathematical tools for measuring the time complexity of an algorithm. This is also referred to as an algorithms growth rate.

## Time Complexity

- Time complexity measures the amount of time an algorithm takes to run as a function of the size of the input.
- It is typically expressed using Big O notation, which describes the upper bound on the growth rate of the algorithm.
  - O(1): Constant time complexity.
  - O(log n): Logarithmic time complexity.
  - O(n): Linear time complexity.
  - O(n log n): Linearithmic time complexity.
  - O(n^2), O(n^3), ...: Polynomial time complexity.
  - O(2^n), O(3^n), ...: Exponential time complexity.
- Common techniques to analyze time complexity:
  - Counting basic operations.
  - Considering the worst-case scenario.
  - Using mathematical analysis or recurrence relations.

## Space Complexity

- Space complexity measures the amount of memory space required by an algorithm as a function of the input size.
- It includes both auxiliary space (space required by the algorithm itself) and input space.
- Similar to time complexity, space complexity is also expressed using Big O notation.

## Factors Affecting Complexity

1. **Input Size**: Larger inputs typically lead to longer execution times and greater memory usage.
2. **Instructions**: The type and number of instructions executed by an algorithm affect its complexity.
3. **Data Structures**: The choice of data structures can significantly impact both time and space complexity.
4. **Control Structures**: Loops, conditionals, and recursion affect the flow of execution and thus the complexity.
5. **Degree of Parallelism**: For parallel algorithms, the number of processors or threads available affects the complexity.

## Analyzing Complexity

1. **Worst-case Complexity**: Determines the upper bound on the runtime or space usage for the worst possible input.
2. **Average-case Complexity**: Considers the expected performance over all possible inputs.
3. **Best-case Complexity**: Represents the lower bound on performance for the best-case input.

## Importance of Complexity Analysis

- Helps in understanding the scalability of algorithms.
- Guides the selection of appropriate algorithms for a given problem.
- Facilitates optimization efforts to improve algorithm efficiency.
- Essential for evaluating the performance of systems and algorithms in real-world applications.

## Types of Asymptotic Notations

1. **Big O Notation (O)**:

   - Big O notation represents the upper bound or worst-case scenario of an algorithm's growth rate.
   - It describes the maximum amount of time or space an algorithm will take as a function of the input size.
   - For example, O(n) indicates that the runtime or space usage of the algorithm grows linearly with the input size.

2. **Big Omega Notation (Ω)**:

   - Big Omega notation represents the lower bound or best-case scenario of an algorithm's growth rate.
   - It describes the minimum amount of time or space an algorithm will take as a function of the input size.
   - For example, Ω(n) indicates that the runtime or space usage of the algorithm is at least linear with the input size.

3. **Big Theta Notation (Θ)**:

   - Big Theta notation represents both the upper and lower bounds of an algorithm's growth rate.
   - It describes the tightest possible bound on the algorithm's performance.
   - For example, Θ(n) indicates that the runtime or space usage of the algorithm grows exactly linearly with the input size.



## References

1.  [Abdul Bari's Asymptotic Notations - Simplified](https://www.youtube.com/watch?v=ddsP7NecEBk&t=557s)
2. [Gate-smashers](https://www.youtube.com/watch?v=7dz8Iaf_weM)
3. [Bro Code](https://www.youtube.com/watch?v=XMUe3zFhM5c)