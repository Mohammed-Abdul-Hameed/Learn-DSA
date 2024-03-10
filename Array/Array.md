# Array

An array is a linear Data Structure that stores the data of similar types.
It is a static data structure with fixed size.

## Types of Array operations -

- **Traversal**: Traverse through the elements of an array.
- **Insertion**: Inserting a new element in an array.
- **Deletion**: Deleting element from the array.
- **Searching**: Search for an element in the array.
- **Sorting**: Maintaining the order of elements in the array.

## Advantages of Arrays

1. Accessing elements is faster.
2. Better Cache.
3. Data of the same type is stored.

## Disadvantages of Array

1. Fixed memory size; memory can't be increased once allocated.
2. It cannot store values of different data types.
3. Deletion and Insertion are very difficult to implement.

## Applications of Arrays

1. Database records are usually implemented as Arrays.
2. Used in sorting algorithms.
3. Many more.

# Subarrays, Subsequences, and Subsets in Array


### Subarrays:

- **Definition**: 
  - A subarray is a contiguous sequence of elements within an array.

- **Key Points**:
  - Retains the order of elements from the original array.
  - The length of a subarray can vary from zero (empty subarray) to the length of the original array.
  - Subarrays are continuous segments of the original array.

- **Example**:
  - Original array: [1, 2, 3, 4]
  - Subarrays: [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4], [1, 2, 3, 4]

### Subsequences:

- **Definition**:
  - A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

- **Key Points**:
  - Elements may not be contiguous in a subsequence.
  - The order of elements is preserved from the original array.
  - A subsequence may contain elements from different positions in the original array.

- **Example**:
  - Original array: [1, 2, 3]
  - Subsequences: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]

### Subsets:

- **Definition**:
  - A subset is a collection of elements selected from the original array, where the order doesn't matter.

- **Key Points**:
  - Subsets can contain any combination of elements from the original array.
  - The number of subsets for an array with 'n' elements is \(2^n\), including the empty subset and the subset containing all elements.
  - The empty subset and the subset containing all elements are always subsets of any array.

- **Example**:
  - Original array: [1, 2, 3]
  - Subsets: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]

