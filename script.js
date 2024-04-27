function convert() {
    let temp = document.getElementById("temp").value
    let result = document.getElementById("result")
    let convert = 0
    convert = (temp * 9/5) + 32
    result.innerHTML = (`O resultado da conversão para Fahrenheit é ${convert}ºF`)
}
