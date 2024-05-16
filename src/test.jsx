const products = ["one", "two", "three"];

const displayPRo = products.map((pro) =>  `<li>  ${pro}  </li>` ); // template literals

// arrow function
// const displayPRo = products.map((pro) => {
//     return "<li>" + pro + "</li>"
// });

console.log(displayPRo);



const ages = [5, 12, 61 , 43, 15];

console.log(ages);

const voteAge = ages.filter((age) => {
    return age > 18; // n number of conditions we can place
});

console.log(voteAge);




const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];

const nums = arr1.concat(arr3, arr2); 
const nums1 = [...arr1, 5, 6 , ...arr2]; // using spread operator
console.log(nums, arr1, arr2, arr3, nums1);

const obj1 = {
    "name": "test"
};

const obj2 = {
    "place": "DE"
};

const obj3 = {...obj1, ...obj2, age: 27}; // spread operator
console.log(obj3);



const max = 16;

console.log(max > 20 ? "toohigh": ( max > 15 ? "Normal" : "low"));


import deafultFeed, {printFeed} from './feed'

console.log(deafultFeed); // variable export
// deafultFeed(); // function export
printFeed()

// https://ibm-learning.udemy.com/course/the-ultimate-react-course-2023-w-real-world-projects/learn/lecture/40384470#content