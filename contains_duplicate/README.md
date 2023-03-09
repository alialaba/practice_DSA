# 217. Contains duplicate  (JAVASCRIPT)
### Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

#### Example 1
``
Input: nums = [1,2,3,1]
Output: true
``

#### Example 2
``
Input: nums = [1,2,3,4]
Output: false
``

## Approach Steps using javascript 
* Assign a varable to Set();
* loop over input array
* if the input array[i] ``has`` same value of the current number return ``true``.
* if not ``add`` input array[i] to the Set().
* or return ``false``.

## Explain 
* Example consider an  input array [1,2,3,1] it contains duplicate of 1 which  return <b>true</b> or consider an input array [1,2,3,4] it do not contains a duplicate which return <b>false</b>.
* Then, if we loop over the input array at index of 0 with number <b> 1 </b> currently, there is no number that currently exist as <b> 1 </b>.
* We store it to th hashset object `` Set(1) {1} ``
* Next, the loop continues to index 1 with the current number <b> 2 </b>, now ask yourself, is there any number same as my current number <b> 2</b> in my hashset?  using our hashset, we can check if there is any. currently our hashset contains ``Set(1) {1}``.
* So when there a same value number in hashset it returns ``true`` if there's  none it add current number <b> 2</b> and our hashset looks like ``Set(2) {1,2}``. move to the next index 2 with current number <b> 3</b>.
* when it loop over all the input array and there is no similar number in the hashset it return ``false``.


### Time complexity is ``0(n)`` , space/memoery is ``0(1)``
## References 
* neetcode https://youtu.be/3OamzN90kPg
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set




