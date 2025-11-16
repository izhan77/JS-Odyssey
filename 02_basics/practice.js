// const items = ["apple", "orange", "banana", "mango", "peach"];

// items.push("kiwi")
// items.unshift("watermelon")
// items.pop()
// items.shift()
// console.log("Index : ", items.indexOf("peach"))
// const slicedArray = items.slice(1,4);
// const splicedArray = items.splice(2,3)

// console.table(items)
// console.log("Sliced Array")
// console.table(slicedArray)
// console.log("Spliced Array")
// console.table(splicedArray)
// console.table(items)
// items.push("dates")
// console.table(items)


// const array = [3,2,8,6,5,7,4];

// const reverseArray = [];

// for (let i = array.length-1; i >= 0; i--) {
//      reverseArray.push(array[i]);
// }

// let maxNum = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxNum){
//         maxNum = array[i];
//     }
// }

// const string = "izhan";
// const charString = [...string];

// console.log(reverseArray)
// console.log("Maximum number : ", maxNum)
// console.log(charString)

// const vowels = [];

// for (let i = 0; i < charString.length; i++) {
//     if (charString[i] === 'a' || charString[i] === 'e' || charString[i] === 'i' || charString[i] === 'o' || charString[i] === 'u'){
//         vowels.push(charString[i]);
//     }
// }

// console.log(vowels);

// const array = [3,2,8,6,3,5,7,4];

// const nonDuplicatedArray = [];
// let duplicate = true;

// for (let i = 0; i < array.length; i++) {
//     const element1 = array[i];
//     for (let j = 1; j < array.length; j++) {
//         const element2 = array[j];
//         if (element1 === element2){
//             duplicate = false;
//         }
//     }

//     if (!duplicate){
//         nonDuplicatedArray.push(element1);
//     }
// }

// console.log(nonDuplicatedArray);

// const array = [3,2,8,8,6,3,5,7,4];

// const nonDuplicatedArray = array.reduce((acc,item) => {
//     if (!acc.includes(item)) acc.push(item);
//     return acc;
// }, []);

// console.log(nonDuplicatedArray)

// let largest = array[0];
// let secondLargest = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest){
//         largest = array[i];
//     }    
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > secondLargest && array[i] !== largest){
//         secondLargest = array[i];
//     }
    
// }

// console.log(largest)
// console.log(secondLargest)