function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

    switch(op) {
        case 'a': var result = num1 + num2; break;
        case 's': var result = num1 - num2; break;
        case 'm': var result = num1 * num2; break;
        case 'd': var result = num1 / num2; break;
    }
   
    document.getElementById("output").value = result;
}