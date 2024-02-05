/*
# js-problems-part2-practice-tasks

### Task -1: 
Find the lowest number in the array below.
<br>
`const heights2 = [167, 190, 120, 165, 137];`
*/

const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(array){
      let smallNumber = array[0];
      for (const num of array) {
            if(num < smallNumber){
                  smallNumber = num;
            }
      }
      //console.log(smallNumber);
}
lowestNumber(heights2)



/*
### Task -2: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
*/


const friendName = ['rahim', 'robin', 'rashed', 'rafi', 'ron','ro','r',];
function smallestName(friendArray){
      let small = friendArray[0].length;
      for (const friend of friendArray){
            if(friend.length < small){
                  small = friend;
            }
      }
      //console.log(small);
}

smallestName(friendName);





/*
### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

      laptop = 35000 tk
      tablet = 15000 tk
      mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
*/
function calculateElectronicsBudget(laptop, tablet, mobile){
      const laptopPrice = 35000;
      const tabletPrice = 15000;
      const mobilePrice = 20000;
      return laptop*laptopPrice + tablet*tabletPrice + mobile*mobilePrice;
}
const totalBudget = calculateElectronicsBudget(2, 4, 7);
console.log(totalBudget);


/*
### Task-4: 

You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

**Input**

<br>

const phones = [
{ model: "PhoneA", brand: "Iphone", price: 95000 },
{ model: "PhoneB", brand: "Samsung", price: 40000 },
{ model: "PhoneC", brand: "Oppo", price: 26000 },
{ model: "PhoneD", brand: "Nokia", price: 35000 },
{ model: "PhoneE", brand: "Iphone", price: 105000 },
{ model: "PhoneF", brand: "HTC", price: 48000 },
];

*/



/*
### Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
```
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
```
*/