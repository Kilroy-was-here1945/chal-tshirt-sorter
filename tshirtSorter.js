// Write your solution below:

let string = 'snlhnfadsdfhgklkhjkjhgffl'

arr1 = []


let arr = Array.from(string)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 's'){
         arr1.push('s')
        }
     if(arr[i] === 'n'){
         arr1.push('n')
    }  if(arr[i] === 'l'){
        arr1.push('l')
    }
    console.log(1)
}
console.log(arr1.join(""))
