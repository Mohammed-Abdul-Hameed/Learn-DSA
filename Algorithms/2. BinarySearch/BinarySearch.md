# Binary Search

1. This algorithm is used to find the target value in the array by dividing them into half.

2. Binary Search must be only implemented if the data is sorted. Binary search works by repeatedly dividing the search interval in half until the target value is found or the interval becomes empty.

3. It relies on the fact that the array is sorted, allowing it to efficiently narrow down the search space.

**Binary search is fantastic for larger datasets!**

## Algorithm in Plain English

1. Input: You start with a sorted array (or list) of elements and a target value that you want to find within that array.

2. Initialization: Set two pointers, start and end, initially pointing to the first and last elements of the array respectively.

3. Calculate the middle index of the current range: `mid = Math.floor((start + end) / 2)`.

4. Check if the element at the middle index is equal to the target value.
If it is, you have found the target value and can return its index.

5. If the element at the middle index is greater than the target value, update end = mid - 1 to search in the left half of the array.

6. If the element at the middle index is less than the target value, update start = mid + 1 to search in the right half of the array.

7. Terminate: Repeat steps 3 until the start pointer crosses the end pointer, indicating that the target value is not in the array.

## Pros

1. It's Effecicent for larger data sets compared to smaller
2. The algorithm is relatively simple to implement

## Cons

1. The array should be sorted.
2. Is less effecient for smaller arrays.

## Refernces

1. [Binary Search HackerRank](https://www.youtube.com/watch?v=P3YID7liBug&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=30)

2. [GeeksforGeeks](https://www.geeksforgeeks.org/binary-search/?ref=next_article)
3. [Visualize Algorithm](https://algorithm-visualizer.org/branch-and-bound/binary-search)