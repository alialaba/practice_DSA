const productExceptSelf =(nums)=>{
    const output = new Array(nums.length).fill(1)

    let prefix = 1; //default nums before first item
   /// Add products to output array starting at the front
    for(let i = 0; i < nums.length ; i++){
        output[i] = prefix;
        prefix *= nums[i]
    }
    //above loop returns [1, 1, 2, 6]

    let postfix = 1;
    // Add products to output array starting at the back
    for(let i = nums.length - 1; i >= 0; i--){
        output[i] *= postfix ;
        postfix *= nums[i]
    }
    //above loop returns [24,12,4, 1]

    return output
}
console.log(productExceptSelf([1,2,3,4]))