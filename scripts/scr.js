function add() {
    x = +document.getElementById("x").value;
    y = +document.getElementById("y").value;
    res = x + y;
    document.getElementById('res').value = res;
}