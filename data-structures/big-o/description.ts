// TODO: change images
// TODO: check out the text, if has some errors
export default `#### What is Big O Notation?
Big O notation is a way to determine the complexity of an algorithm. Using Big O notation we assume the ratio of time or memory needed to execute some algorithm on a certain amount of data. We measure how much time or memory is needed to execute a given algorithm as the data we put into it grows. 

Time complexity in this sense is defined by the approximate number of computational steps needed to perform a task. Memory complexity in the amount of memory needed. The smaller the number of steps / memory units, the more efficient the algorithm. 

Big O notation is based on the so-called asymptotic growth rate O(n). Asymptotic notation allows us to express the performance of algorithms with respect to their inputs. In simple words, with its help, we check how the function scales with the increase in data.


###### Time complexity of algorithm
Let’s start with a little introduction of where this approach came from. The speed of the algorithm execution depends on several factors: the amount of data, the quality of the algorithm and the parameters of the machine (computer) that executes it. As for the third aspect. Different machines will execute the same algorithm for different lengths of time. In fact, even the same computer can run the same algorithm with the same input for a different amount of time. Because today’s computers are very complex devices, running many different processes at the same time. All these processes have an impact on resource consumption, which translates into the final result. Big O therefore rejects the aspect of machine performance, because it is relative.


###### In Big O not everything matters
An important issue indirectly resulting from the same fact is that it is difficult to measure the execution time of algorithms precisely. In many cases, these values would be micro or nanoseconds. Which ultimately wouldn’t matter. No one in their daily work would throw every block of code into a measuring program. Especially since it’s unnecessary. That’s why in Big O notation we don’t measure time in the sense that we measure seconds, it focuses more on time as some sort of units.

Now, a bit about the approximation mentioned in the introduction. Let’s take a simple function, and count operations / steps:
${'```javascript'}
function simpleAddUpTo(n) {
    return n * (n + 1) / 2;
  }
${"```"}

Operations / steps:
1 multiplication
1 addition
1 division

As we can see, we have three operations here (not counting the return itself). It was very easy to count. So let’s go a step further:

##### Big O of loops

${'```javascript'}
function loopAadUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i ++) {
      sum += i;
    }
  return sum;
}
${"```"}

Let’s count everything what’s happening in here:

Operations / steps:

1 asignment: <code>total = 0</code>;

another asignment in a for loop

also in for loop n comparisons (<code>i <=n</code>)

again n additions and n assignments (<code>i++</code>)

inside of the function:

n additions

n assignments / reasignments: (sum +=)

In the previous example, n was just the number used in the mathematical operation. It had no effect on the number of operations performed. As we can see here, when we are dealing with something totally different: loops, so things get much more complicated.

First, if n is zero, then theloop will fail. So the only operations that will be performed (apart from returning) are the operations of declaring and assigning variables. However, for larger numbers in this loop, the number of operations depends on the amount of data. The larger n we use in the function, the more operations will be performed. So until we have n, we can't even say exactly how many of these operations there will be. It could be 2n or it could be 5n + 2;

However, we know that the number of operations increases in proportion to n.

#### Big O doesn't care about the details

Therefore, when using Big O notation, we always consider only the worst-case scenario. If in the above case (or any other) an algorithm in almost all variants can be executed in the shortest possible time, but in at least one case the runtime will take a very long time, then the Big O of this algorithm is equal to this one case (equals the maximum). 

To be clear, when analyzing the performance of algorithms, we can take into account, for example, the best, average and worst result. The fact that Big O considers only the worst case scenario does not mean that the others are irrelevant or useless. It all depends on the specific case.


###### Small numbers out!
Let’s take a look at these examples again, we can conclude that "small numbers" in calculating complexity of aforementioned algorithms do not matter much. Let's go back to the first example: <code>simpleAddUpTo</code>. No matter how many math operations we would have one after the other in this function, the quantity of the operations would not depend on the number of n. That means that no matter what n we would pass the length of the algorithm or the approximate number of operations performed would always be the same for each N. Precisely writing would be equal to the number of mathematical operations . This situation is called **O(1)**. A graph presenting ratio of data size against need time to process it would look like this:

<img src="https://rockstar-programmer.com/wp-content/uploads/2023/02/image-6.png" width="220px" height="160px">

Where x corresponds to the size of input data and y = 1 to the time needed to preprocess such data size.

In the second example <code>loopAadUpTo</code>, the number of steps will depend on the amount of data passed. The larger the data, the more units of time will be needed until the algorithm is fully executed. The main part of this increase is due to the use of loops. Even if inside the loop we increased the number of operations drastically, the general trend of the increase of time units to the amount of data will be n. Whilst number of operations inside loop is constant there. It never changes so it doesn't affect the overall trend/correlations of time and data. 

The amount of time increases in direct proportion to the amount of data (n). So in Big O we put aside all the 'some operations' and leave n alone. For example, O(3N) becomes O(N) and in the case of O(N² + 2N + 3500) we leave O(N²). In one of the courses I saw, the lecturer said that Big O is like a big vacuum cleaner that sucks only important things and rejects trifles. What matters is this general trend. Therefore, in the second example, the complexity of our algorithm will be O(n).

#### Nesting loops
Let's move on to the next example. **An example of the complexity we want to avoid in our code! It is O(N²)**. The flagship example of an algorithm of this complexity is the nested loop. One of the most popular examples of using loops in this way is an algorithm that prints out all pairs of numbers in an array.

${'```javascript'}
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log("arr[i]} + ','+ arr[j]");
      }
    }
  }
  ${"```"}

  In the above algorithm, we have two loops. The outer loop will execute n times. The inner loop will also execute n times. The total maximum number of operations that the algorithm must perform is therefore n * n or n2. If the array had 10 numbers, we'd have to print them 100 times. 

**If 1,000 -> 1,000,000 times.**

So you can imagine now, the importance of algorithm efficiency for example in big data areas, where we are dealing with huge amounts of data.

<img src="https://rockstar-programmer.com/wp-content/uploads/2023/02/image-8-1024x922.png"  width="310px" height="280px">

#### Example of the efficient algorithm

The last example of an algorithm in this section will be an example of an algorithm with an efficiency of **O(log n)**. The previous complexities, i.e. O(1), O(n), O(n2) were by far the most common (at least in literature). However, the one that I will present now is equally important, especially since it is very efficient.

I will use a real life example to illustrate it. Suppose you are looking for a phone number in the phone book with a person's name. Let us note that in books, data are usually arranged alphabetically after the surnames listed. Start by marking a point about halfway through the book and see what name is there. If the last name you found begins with an 'earlier' letter of the alphabet than the one you are looking for, select the right half of the book, if vice versa, the left half. Then repeat the action of dividing the parts of the book you have read in half and selecting the middle until you find the data you are looking for. BTW what you did is called binary search which I will write more about in the future. In any case, regardless of the number of names, the number of operations will always be O(log n). Such complexity can often be seen in efficient sorting algorithms and very often in recursive algorithms, which you will learn more about soon.

<img src="https://rockstar-programmer.com/wp-content/uploads/2023/02/image-10.png" width="310px" height="280px">


#### But what was a logarithm?

Before going further, the clarification. Logarithm is the inverse of exponentiation. The logarithm of b to the base a is a number c such that a raised to the c power gives b. logab = c equals ac = b. .
In terms of Big O notation most commonly used is the base 2 logarithm. A logarithm without a base number is a base 2 logarithm.

What this logarithm does In simple terms, it answers the question of how many times do we have to multiply two by itself to get some number. For our algorithm, we start with some n. N is the number of names in the book. Our search is done by splitting the book in half. So for each subsequent step, we have n / 2 operations to finish (n divided by two). We keep dividing until we get an indivisible number. For example, let's take the number of names 1024.

| Guesses | &nbsp;| &nbsp;|  Items |
| :---    | :---: | ---:  |  :---  |
| 1       |       | &nbsp;| 2      |
| 2       |&nbsp; |       | 4      |
| 3       |       |       | 8      |
| 4       |       |       | 16     |
| 5       |       |       | 32     |
| 6       |       |       | 64     |
| 7       |       |       | 128    |
| 10      |       |       | 1024   |

We would have to do this kind of “dividing by two” with such a number of names 10 times.
If we double the number of names to 2048 steps, we will have to do 11 steps. Four times the amount of data (4096) will need 12 divisions. Eight times the amount of data (8196) 13 divisions. As we can see, the number of operations needed to find the name we are interested in does not grow linearly. **The more data, the more the trend decreases**.

**For numbers of names between 1 and a million, in the worst case scenario, we would find the name we are interested in in at most 20 tries.**

Every algorithm you write has some complexity. Although millions of algorithms are written in the world every day thanks to the Big O notation, their classification is usually limited to only a few complexities:

#### Big O notation – There are only a couple of complexities to consider

• **Constant O(1)**: The algorithm has a constant execution time, independent of the size of the input data.
• **Logarithmic O(log n)**: The complexity is logarithmic; as the amount of data increases exponentially, time will increase linearly. This means it will take less time to process more items.
• **Linear O(n)**: The complexity is linear, the execution time increases in proportion to the amount of input.
• **N x log n O(n log n)**: Complexity is logarithmic multiplied by some variable n.
• **Quadratic O(n^2)**: The complexity is quadratic and the running time is proportional to the square of the input.
• **Exponential O(2^n)**: Complexity is exponential; execution time doubles with each new item added.
• **Factorial O(n!)**: Complexity is factorial. The algorithm will be executed in time n factorial for each new operation that is performed.

<img src="https://rockstar-programmer.com/wp-content/uploads/2023/02/image-9-1024x735.png"  width="410px" height="295px">

As we can see in the graph, in the case of the most efficient algorithms, the number of operations / units of time almost does not increase with the increasing amount of data. However, in the case of the least optimal, even a small increase in the amount of data results in a huge jump in time / number of operations / number of steps needed to execute the algorithm.

#### Summary of the Big O Notation

To sum up – we use Big O notation to analyze the performance of algorithms. Big O defines the ratio of time to the amount of data transferred to the algorithm. Big O doesn’t care about precision, what matters is the general trend. At Big O, we only consider the worst case scenario. We do not consider constant or less significant numbers.


O(n) generally means that if the problem is ‘n’ in size, then the algorithm must ‘visit’ all (n) elements. O(log n) means we cut the problem in half. The algorithm checks some part, ‘cuts off’ half and repeats until the task is done. O(n^2) means that the algorithm has to look at pairs of things (like a handshake at a party between n people).

##### PS of the Big O Notation

Regarding Big O of the specific operations:
* arithmetic operations are constant – O(1)
* assigning variable also – O(1)
* reaching elements of an array or object (by index / key) – O(1)
* in loops, the complexity equals the length of the array times what we have inside – O(n)

`