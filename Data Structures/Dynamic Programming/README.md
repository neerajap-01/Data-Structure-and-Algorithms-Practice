
# DYNAMIC PROGRAMMING

A light description/introduction of Dijkstra's Algorithm in this readme file.

MAKE SURE YOU'RE OK WITH ***RECURSION***
## OBJECTIVES

- Define what dynamic programming is
- Explain what overlapping subproblems are
- Understand what optimal substructure is
- Solve more challenging problems using dynamic programming
## WTF IS  DYNAMIC PROGRAMMING

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
## WHERE DOES THE NAME COME FROM?

IT ONLY WORKS ON PROBLEMS WITH...
- **OPTIMAL SUBSTRUCTURE**    
- **OVERLAPPING SUBPROBLEMS**
## OVERLAPPING SUBPROBLEMS

A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused several times
## FIBONACCI SEQUENCE

"Every number after the first two is the sum of the two preceding ones"

<<<<<<<<GIF>>>>>>>>

### FIBONNACI NUMBERS

<<<<<<<IMG>>>>>>>

### REMEMBER MERGESORT?

<<<<GIF>>>>

### A VERY SPECIAL CASE

<<<<<GIF>>>>>
## OPTIMAL SUBSTRUCTURE

A problem is said to have **optimal substructure** if an optimal solution can be constructed from optimal solutions of its subproblems

### SHORTEST PATH

<<<<<<GIf>>>>>>

### LONGEST SIMPLE PATH

<<<<<<<<GIF>>>>>>>>

### More Examples


Let's return to our pal...
THE **FIBONACCI SEQUENCE**


## LET'S WRITE IT!

- Fib(n) = Fib(n-1) + Fib(n-2)
- Fib(2) is 1
- Fib(1) is 1
## RECURSIVE SOLUTION

```
function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
```

<<<<<<GIF>>>>>>
## LET'S CHAT ABOUT Big O

<<<<<IMG TABLE>>>>>
## HOW BAD?

**O(2^N)**

<<<<IMG>>>>
## WHAT CAN WE IMPROVE??

<<<<<GIF>>>>>
## WHAT IF WE COULD "REMEMBER" OLD VALUES?

ENTER\
**DYNAMIC PROGRAMMING**

"Using past knowledge to make solving a future problem easier"

ENTER (AGAIN)\
**DYNAMIC PROGRAMMING**

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."
## MEMOIZATION

Storing the results of expensive function calls and returning the cached result when the same inputs occur again
## A MEMO-IZED SOLUTION OF FIBONACCI

```
function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}
```

<<<<<<GIF>>>>>>
## LET'S CHAT ABOUT BIG O

<<<<<<GIF>>>>>>

MUCH BETTER
O(N)

<<<IMG>>>
## ONCE AGAIN DYNAMIC PROGRAMMING

"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

WE'VE BEEN WORKING

**TOP-DOWN**

BUT THERE IS ANOTHER WAY!

**BOTTOM-UP**
## TABULATION

Storing the result of a previous result in a "table" (usually an array)

Usually done using **iteration**

Better **space complexity** can be achieved using tabulation
## TABULATED VERSION OF FIBONACCI

```
function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
```

<<<<<<<<GIF>>>>>>>>