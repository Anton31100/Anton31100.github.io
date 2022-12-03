    let nam = prompt("Введите ваше имя");
    if (confirm("Tочно?")) {
        alert ("привет" + " " + (nam));
    }
    else {
        alert ("Ну и ладно");
    }
function calc(sumb) {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var result
    switch (sumb) {
        case "+":
            result = val1 + val2;
            break;
         case "-":
            result = val1 - val2;
            break;
         case "*":
            result = val1 * val2;
            break;
         case "/":
            result = (val2 != 0) ? val1 / val2 : "Деление на ноль";
            break;
        default:
            break;
    }

    document.getElementById("result").value = result;
}