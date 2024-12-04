const units = {
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    feet: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
};

function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('Unit-From').value;
    const toUnit = document.getElementById('Unit-To').value;

    if (isNaN(value)) {
        document.getElementById('result').innerText = "Моля, въведете валидна стойнст.";
        return;
    }

    const result = (value * units[fromUnit]) / units[toUnit];

    document.getElementById('result').innerText = `Резултат: ${result.toFixed(6)} ${toUnit}`;
    document.getElementById('formula').innerText = 
        `${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

document.getElementById('btn-convert').addEventListener('click', convert);
