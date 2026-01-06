function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2 //behaviour of object in function
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//JS will try to find the answer by going higher and higher till object until it gets the null value, hence here we are getting the values

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ //here the qs is which core i have to increase(kiska),hence use this for giving it the context of above
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)//new for new instances

chai.printMe()