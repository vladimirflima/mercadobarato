function calculate() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
        var result = (value3 * value2) / value1;
        document.getElementById('result').value = result;
    } else {
        alert("Por favor, insira valores válidos nos campos.");
    }
}
