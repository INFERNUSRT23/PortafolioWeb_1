
document.getElementById("tipForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(subtotal) || isNaN(tipPercent)) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const tipAmount = (subtotal * tipPercent) / 100;
  const totalAmount = subtotal + tipAmount;

  document.getElementById("result").innerHTML = `
                <h2>Resultados:</h2>
                <p>Propina: $${tipAmount.toFixed(2)}</p>
                <p>Total a pagar: $${totalAmount.toFixed(2)}</p>
            `;
});

// Mostrar el resultado solo si hay contenido
const resultDiv = document.getElementById("result");
document.getElementById("tipForm").addEventListener("submit", function () {
  setTimeout(() => {
    if (resultDiv.innerHTML.trim() !== "") {
      resultDiv.style.display = "block";
    }
  }, 10);
});
