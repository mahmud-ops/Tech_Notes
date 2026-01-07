Data structures and algorithms (part 1 : Linear data structures)
---

There are 5 types of linear data structure

1. Array 
2. Linked List
3. Stack
4. Queue
5. Hash table

Here’s your whole **Big O notation Markdown note**, cleaned up and polished for readability, textbook-style but still simple English:

# Time and Space Complexity

Time complexity measures how long an algorithm takes to run as the input size grows.  

Space complexity measures how much memory an algorithm uses as the input size grows.  

Big O notation is used to express both time and space complexity in a standard way.  

Both help us understand the efficiency of algorithms and make better choices when solving problems.


# Big O Notation

Big O notation is a way to describe how fast an algorithm runs or how much memory it uses as the size of the input increases.  
It helps us compare different algorithms and choose the one that works more efficiently, without depending on the computer or programming language used.



## Types of Notation

### 1. O(1) — Constant Time
The algorithm takes the same amount of time regardless of the input size.

**Example code**
```java
int getFirst(int[] arr) {
    return arr[0];
}
```



### 2. O(log n) — Logarithmic Time

The input size is reduced at every step. Common in search algorithms like binary search.

**Example code**

```java
int binarySearch(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}
```



### 3. O(n) — Linear Time

The algorithm runs once for every element in the input.

**Example code**

```java
int sum(int[] arr) {
    int total = 0;
    for (int x : arr) total += x;
    return total;
}
```



### 4. O(n log n) — Linearithmic Time

Appears in efficient sorting algorithms like merge sort and heap sort.

**Example code**

```java
// Merge sort uses O(n log n)
```



### 5. O(n²) — Quadratic Time

Nested loops over the input. Be careful with large inputs.

**Example code**

```java
void printPairs(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = 0; j < arr.length; j++) {
            System.out.println(arr[i] + ", " + arr[j]);
        }
    }
}
```



### 6. O(2ⁿ) — Exponential Time

Runs extremely slowly for large inputs. Often appears in recursive brute-force solutions.

**Example code**

```java
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```



***Ranking (Best → Worst)***

O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)

