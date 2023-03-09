const containsDuplicate=(nums)=>{

    const hashSet = new Set(); //storing unique numss
//    console.log(hashSet)

for (let i = 0; i < nums.length; i++) {
    if(hashSet.has(nums[i])){
        return true
    }
    hashSet.add(nums[i]);
    // console.log(hashSet)  will display unique num it contains 
}
return false
}

console.log(containsDuplicate([1,2,3,1]))