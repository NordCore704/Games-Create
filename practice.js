const newObj = {
     walk() {
        console.log(this)
     }
}

const nums = [1, 2, 3, 4, 5];

const squared = nums.map((item) => item * item)

console.log(squared)