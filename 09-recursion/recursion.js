function factorial(n) {
 
  console.log(n) // 1
  
  // EXIT condition
  if (n === 0) {
    return 1;
  } 
  // descend DOWN a level => always decreasing 
  return n * factorial(n - 1); // 
}

// the flow:
// 3 * factorioal(2)
// 3 * 2 * factorial(1)
// 3 * 2 * 1 * factorial(0)
// 3 * 2 * 1 * 1 => 6

// console.log(factorial(1));
// console.log(factorial(2));
console.log(factorial(3)); // 3 * 2 * 1
// console.log(factorial(4));
// console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1


/**
 * Recursion TREE visualized: 
 * 3 
 *   2
 *     1
 *       0 EXIT
 *        -1 
 *          -2 
 *            -3
 *  
 */