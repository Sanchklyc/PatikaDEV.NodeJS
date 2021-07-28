const PI = Math.PI;

let circleArea = (r) => {
    return PI * (r*r);
} 
let circleCircumference = (r) => {
    return 2*PI*r;
}

module.exports = {circleArea,circleCircumference};