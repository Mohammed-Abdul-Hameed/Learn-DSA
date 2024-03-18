# Classification of Algorithm

The classification of algorithms is important for several reasons:

- Organization
- Problem Solving
- Performance Comparison
- Reusability

Classification of algorithms plays a crucial role in computer science and helps to improve the efficiency and effectiveness of solving problems.

## Classification by Implementation Method

1. Recursion or Iteration:

   A **Recursive** algorithm is an algorithm where it calls itself again and again until a certain condition is achieved, while an **Iterative** algorithm uses loops and data structures like stacks or queues to solve problems.

2. Exact or Approximate:

   Algorithms that are capable of finding an _optimal solution_ for any problem are known as the **exact algorithm**. When it is not possible to find an optimized solution, an **approximation algorithm** is used.

3. Serial or Parallel or Distributed Algorithms:

   In **serial algorithms**, one instruction is executed at a time while **parallel algorithms** are those in which we divide the problem into subproblems and execute them on different processors. If parallel algorithms are distributed on different machines, then they are known as distributed algorithms.

## Classification by Design Method

1. Greedy Method:
   Here, the most optimum solution is used without considering the future consequences.

2. Divide and Conquer:
   The problem is divided into subproblems, solved recursively, and then the final answer is recombined.

3. Dynamic Programming:
   Dynamic programming shares similarities with the divide and conquer approach. Both techniques break down problems into smaller subproblems to solve them efficiently.

   **How DP, D&C are similar to each other:**

   > While encountering recursive function calls with identical inputs and results, in Dynamic Programming, the values are typically stored in a Data Structure. By doing this, we don't have to recompute the same values again and again.

   The stored results are usually stored in a memorization table.

   By storing and retrieving results from the table, dynamic programming reduces the overall time complexity, recomputation, and overlapping of subproblems are avoided.

   _The term "dynamic" refers to the process of making decisions dynamically during computation._

   Dynamic Programming is usually used in problems involving optimization, finding the shortest path, maximizing profit, minimizing cost.

   > Dynamic programming stores and reuses solutions to overlapping subproblems, while divide and conquer solve each subproblem independently.

4. Backtracking:
   This technique is used to solve problems that have one _unique solution_, where we have to find the correct combination of steps to solve problems.

   Backtracking uses a recursive approach to solve problems. It employs a trial and error method by keeping track of all the steps used.

   To improve efficiency, backtracking often employs pruning techniques to eliminate certain branches of the search tree that are known to be invalid or cannot lead to a solution.

   > Pruning is a technique used to optimize algorithms by eliminating certain branches of the search space that are known to be invalid or cannot lead to a solution. It involves selectively discarding portions of the search space to reduce the amount of computation needed.

   Solving problems using problems can increase the time complexity of a problem making them less effecient.

5. Branch and Bound:
   Unlike backtracking, this technique is used for solving combinatorial optimization problems where _multiple soltions_ exist and we have to find the most optimal solution.

   As the program progresses, each state combination is explored and the prevoius solution is replaced by the new one if it is not the optimal than the current solution.

## Classification by Design Approaches

There are two approaches for solving designing an algorithm.

1. **Top Down**:

   - Breaks down a complex problem into smaller, manageable sub-problems.
   - Solves each sub-problem individually, starting from high-level abstraction and moving downwards.
   - Emphasizes designing the overall structure first before delving into specifics.
   - Suitable for problems where the overall architecture is critical.

2. **Bottom-Up Approach**:

   - Builds a system by starting with individual components and integrating them gradually.
   - Solves sub-problems first and then combines them to address larger issues.
   - Focuses on implementing smaller components before integrating them into the system.
   - Suited for problems where attention to detail in individual components is essential.