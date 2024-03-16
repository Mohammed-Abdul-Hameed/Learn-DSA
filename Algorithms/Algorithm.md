# Algorithm

An algorithm is a well-defined sequential computational technique that accepts a value or a collection of values as input and produces the output(s) needed to solve a problem.

## Why Algorithms

1. Effeciency - Can perform tasks quickly and accurately
   
2. Consistency - Algorithms are repeatable and produce consistent results every time they are executed.
   
3. Scalability - Algorithms can be scaled up to handle large datasets or complex problems, which makes them useful for applications that require processing large volumes of data.

## Types of Algorithms

1. Sorting

Sorting contains algorithms like *Bubble sort*, *Insertion sort*, *Selection sort*, *Merge sort*, *Quick sort*. Each of these algorithms have different time complexities, making them useable for certain use cases

2. Searching

Searching algorithms are algorithms that search for a particular element or value in a data structure

Searching contains algorithms like *Linear search*, *Binary search*, *Jump search*, *Interpolation search*, *Hash Table search*.

Each of these algorithms have different time complexities, making them useable for certain use cases

3. Graph 

These algorithms are used to find the shortest path, Graphs are mathematical structures used to model relationships between objects, where the objects are represented as vertices (or nodes) and the relationships between them are represented as edges. 

Some of the common graph algorithms are *Shortest Path algorithms (e.g. Dijkstra’s, Bellman-Ford, A*)*, *Minimum Spanning Tree algorithms (e.g. Kruskal, Prim)*, *Maximum Flow algorithms (e.g. Ford-Fulkerson, Edmonds-Karp)*, *Network Flow algorithms (e.g. Bipartite Matching)*, *Connectivity algorithms (e.g. Depth-first Search, Breadth-first Search)*.

## Complexity of an Algorithm

Complexity of an algorithm is referred to as the time and memory required to solve a problem, complexity is measured in time and space. Writing an effecint algorithm requires both time and space complexity.

**Time Complexity:**

- Measures the amount of time an algorithm takes to solve a problem.
- Describes the number of operations an algorithm performs based on the input size.
- It's often expressed using Big O notation.
- Reflects the efficiency of an algorithm in terms of execution time.
- Determined by analyzing the number of iterations, comparisons, or other operations.
- Helps in choosing the most efficient algorithm for a given problem.

**Space Complexity:**

- Measures the amount of memory an algorithm uses to solve a problem.
- Includes space for input variables and any extra space used by the algorithm.
- Auxiliary space refers to additional space beyond input space.
- It's also often expressed using Big O notation.
- Reflects the efficiency of an algorithm in terms of memory usage.
- Helps in selecting the appropriate data structure based on memory requirements.

## Types of complexities of an algorithm

**1. Best Case Complexity:**

- This scenario represents the minimum amount of work required by an algorithm.
- It reflects the most favorable input data configuration for the algorithm.
- Best-case complexity provides insights into the lower bound of the algorithm's performance.
- However, achieving the best-case scenario may not always be practical or relevant in real-world situations.
- Best-case analysis helps in understanding the inherent efficiency of an algorithm under optimal conditions.
- It's often used to showcase the potential capabilities of an algorithm under ideal circumstances.

**2. Worst Case Complexity:**

- This scenario represents the maximum amount of work required by an algorithm.
- It reflects the least favorable input data configuration for the algorithm.
- Worst-case complexity provides a guaranteed upper bound on the algorithm's performance.
- Analyzing the worst-case scenario is crucial for ensuring that the algorithm performs acceptably under all possible inputs.
- It helps in identifying potential bottlenecks or inefficiencies in the algorithm's design.
- Worst-case analysis is widely used in algorithmic studies and real-world applications to ensure reliability and predictability.