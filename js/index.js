//alert('Hello!');
//console.log('Hello!');
//document.write('Hello!');

/* var result = Math.sqrt(25);
document.write(result); */

var a = Number(prompt('Enter a'));
    b = Number(prompt('Enter b'));
    c = Number(prompt('Enter c'));
    
function discr(a, b, c) {
    var d = b*b - 4*a*c;
    return d;
}

function root1(a, b, d) {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    return x1;
}

function root2 (a, b, d) {
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    return x2;
}

// a*x*x + b*x + c = 0

var D = discr(a, b, c);

    if (D < 0) {
        document.writeln('Equation: (' + a + ')x<sup>2</sup> + (' + b + ')x + (' + c + ') = 0 <br>');
        document.write('D < 0 => has complex roots');
    } else {
        var x1 = root1(a, b, D);
            x2 = root2(a, b, D);
        document.writeln('Equation: (' + a + ')x<sup>2</sup> + (' + b + ')x + (' + c + ') = 0 <br>');
        document.write('D = ' + D + '<br> Your roots: x<sub>1</sub> = ' + x1.toFixed(2) + ', x<sub>2</sub> = ' + x2.toFixed(2));    
    }
