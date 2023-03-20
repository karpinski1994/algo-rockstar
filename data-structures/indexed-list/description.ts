export default `#### Summary

An array is a linear data structure that stores a collection of elements, each identified by a unique index or subscript. Elements in an array are stored in contiguous memory locations and can be of any data type such as integers, floating-point numbers, or characters. Arrays allow for fast and efficient access to specific elements based on their index, and are commonly used in computer algorithms and programming. The size of an array is fixed at the time of creation, and updating or inserting elements may require shifting existing elements and allocating additional memory.

##### Features

Indexing: Elements in an array are stored in contiguous memory locations and are accessible using an index or subscript, which is an integer value. The index is zero-based, meaning that the first element has an index of 0, the second element has an index of 1, and so on.

Fixed size: The size of an array is fixed at the time of creation and cannot be changed dynamically. This means that the size of an array must be specified in advance, and once an array is created, its size cannot be increased or decreased.

Element storage: All elements in an array must be of the same data type, such as integers, floating-point numbers, characters, or even other arrays. Storing elements of different data types in an array is possible, but it requires a data structure called a union or a variant.

Performance: Arrays are optimized for fast and efficient access to specific elements based on their index. Searching for an element in an array takes O(n) time in the worst case, where n is the number of elements in the array. However, random access to an element in an array takes O(1) time, making arrays a good choice for storing and accessing large amounts of data.

Limitations: Although arrays offer fast and efficient access to specific elements, inserting or deleting elements can be slow and requires shifting existing elements and allocating additional memory. This makes arrays less efficient for dynamic data structures where the size of the collection is constantly changing. For these use cases, alternative data structures such as linked lists, trees, or hash tables may be more appropriate.

#### Operations
The most common operations performed on linked lists are:

Accessing an element: O(1) - directly access any element of the array by its index.
Searching for an element: O(n) - search for a specific element in the array by comparing each element one by one.
Inserting/Appending an element: O(n) - add a new element to the end of the array or insert an element at a specific position, shifting other elements to make room.
Deleting an element: O(n) - remove an element from the array by shifting the elements after it to fill the gap.
Sorting the array: O(n * log n) (e.g., using QuickSort) - rearrange the elements in the array in a specific order, such as increasing or decreasing.
Traversing the array: O(n) - visit each element of the array one by one.
Reverse the array: O(n) - rearrange the elements in the array in reverse order.


(We're assuming that it's one-dimensional n-element array)

### Videos
[Array explained in 1 Minute](https://www.youtube.com/watch?v=6tjYC86iV5E)

[An Overview of Arrays and Memory (Data Structures & Algorithms #2)](https://www.youtube.com/watch?v=pmN9ExDf3yQ)
`