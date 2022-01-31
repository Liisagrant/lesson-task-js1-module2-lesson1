//Question 1
function receivingFunction (callbackFunction){
  console.log("the argument is a " + typeof callbackFunction);

}
receivingFunction(callbackFunction);

function callbackFunction (){
    console.log("I am the callback function");
}

//Question 2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

/*for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
}*/

prizes.forEach(function (prize,index,) {
 console.log("Prize " + index + ": " + prize )
})


//Question 3
const waitforit = 5000;

setTimeout(function () {
    console.log("I waited 5 seconds before executing")
}, waitforit);


//Question 3
let count = 0;
const max = 4

const interval = setInterval(function() {
    count ++;

    if (count === 4) {
        clearInterval(interval)
}
console.log(count);
},1500);


