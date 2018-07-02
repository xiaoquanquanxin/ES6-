const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};
function greet(like) {
    this.like = like || null;
    this.age = 18;                      //  这种方法可以给bruce加上age这个属性
    return `I am ${this.name}`;
}
//greet();
//console.log(greet.call(bruce));
//console.log(greet.call(madeline));
//console.log(bruce);


const james = {name: "james"};
console.log(greet.apply(james, ["ball"]));
//console.log(james);


/*************
 * apply
 * *******************/
const arr = [11, 2, 4, 5, 7, 8, 9, 20];
let min = Math.min.apply(null, arr);
console.log(min);
min = Math.min(...arr);
console.log(min);


console.log(1);
{
    const x = 1;
    console.log(x)
}

console.log(x);