function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

    switch(op) {
        case '+': var result = num1 + num2; break;
        case '-': var result = num1 - num2; break;
        case '*': var result = num1 * num2; break;
        case '/': var result = num1 / num2; break;
    }
   
    document.getElementById("output").value = result;

    var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + result + "</div>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
}