function Sum (a, b) {
    let a = 3
    let b = 6
    let sum = 0
    sum = a + b
    return sum
}
console.log(sum);



function Pozdrav(name) {
    let name = "Ivan"
    let pozdrav = "Hello, ${name}"
    return pozdrav
}
console.log(pozdrav);



function OddEven(num) {
    let num = 25
    let check
    if (num%2 == 0) check=true
    else check=false
    return check
}
console.log(check);



function Masiv(nums) {
    let nums = [3, 7, 2, 8, 5]
    let max = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
}
console.log(max);



function Palindrom (text) {
    let j = text.length - 1
    let pal
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] != text[j]) {
            pal=false;
        }
        j--;
    }
    pal=true;
    return pal;
}
console.log(pal);


