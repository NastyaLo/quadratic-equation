module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s/g, '');
    let iA = equation.indexOf("x^2");
    let a = equation.substring(0, iA-1);
    let iB = equation.indexOf("x", iA+2);
    let b = equation.substring(iA+3, iB-1);
    let c = equation.substring(iB+1);

    let discriminant = Math.round(b*b - 4*a*c);
    let root1 = Math.round( ( -b+Math.sqrt(discriminant)) / (2*a) );
    let root2 = Math.round( ( -b-Math.sqrt(discriminant)) / (2*a) );

    return ([ root1, root2 ]).sort(( a, b ) => a - b);
}
