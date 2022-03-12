const isEven = function(x) {
    return (x % 2) === 0;
}
function hello() {
    console.log('Hello, world!')
  }
function getString() {
    const greeting = 'Hello, Mate Academy!';
    return greeting
  }
function greeter(name) {
    return `Hi, ${name}!`
  }
function greeters(name, partOfTheDay) {
    return `Good ${partOfTheDay}, ${name}!`
  }
function double(num) {
    return num*2
  }

console.log(hello);
console.log(getString);
console.log(greeter('Alexandr'));
console.log(greeters('Alexandr', 'morning'));
console.log(double(3));
console.log(isEven(3));

document.write(hello);
document.write(getString);
document.write(greeter('Alexandr'));

