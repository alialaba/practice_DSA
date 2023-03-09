# 238. Product of Array Except Self (JAVASCRIPT) 

### Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.


### Example 1
``
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
``

### Example 2
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

[Leetcode: 238 Product of array except self](https://leetcode.com/problems/product-of-array-except-self/) 


## Approach steps using javascript
* Create an output array with each position output array[i] equals one and make it length equivalent to that of the length of input array.
* initialize prefix as 1
* loop over the input array (forward looping)
  * Each of the output[i] array let the prefix be stored to it.
  * prefix should be multiply with input[i] array
* initialize prefix as 1
* loop over the input array (backward looping)
  * Each item of output[i] array, will not be stored to the postfix, (so as not override the stored values) but multiply 
  * multiple the postfix with input array[i].
* return your output array.

