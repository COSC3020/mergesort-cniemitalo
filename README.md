# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### My Answer 
Mergesort is a divide and conquer algorithm, which means the division of each subarray 
would have $log(n)$ time complexity. The actual sorting part of the algorithm checks
every element against the ones to the left, so in the worst case, it would have to check 
every single element every iteration, $n * n$ or $n^2$. The remainder of the code
essentially runs in constant time, which we can ignore in asymptotic analysis. The
$\Theta$ bound for worst case scenario would therefore be $\Theta(n^2 log(n))$. 

## Sources and Plagiarism 
Sources: 

https://interviewkickstart.com/blogs/learn/iterative-merge-sort, for looping through the array 

https://www.geeksforgeeks.org/in-place-merge-sort/, for switching the array elements without overwriting them 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
