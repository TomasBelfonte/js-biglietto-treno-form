
const btnGenera = document.getElementById("btn-genera");
const btnAnnulla = document.getElementById("btn-annulla");


btnGenera.addEventListener("click", function () {
    const nameHtml = document.getElementById("passenger-name");
    nomepasseggero.innerHTML = nameHtml.value;
    const kmHtml = document.getElementById("km");
    kmtotali.innerHTML = kmHtml.value;
    const priceHtml = parseInt(kmHtml.value);
    const ageHtml = document.getElementById("selected-age");
    offerta.innerHTML = ageHtml.value + "%";
    let prezzoBase = priceHtml * 0.21;
    
    if (ageHtml.value === "20") {
        prezzoBase =  (prezzoBase - ((prezzoBase * 20) / 100));
        costodelbiglietto.innerHTML = `${prezzoBase.toFixed(2)}`;
    }

    else if (ageHtml.value === "40") {
        prezzoBase =  (prezzoBase - ((prezzoBase * 40) / 100));
        costodelbiglietto.innerHTML = `${prezzoBase.toFixed(2)}`;
    }

    else {
        costodelbiglietto.innerHTML = `${prezzoBase.toFixed(2)}`;
    }

    const finalPriceHtml = document.getElementById("costo-del-biglietto");
    finalPriceHtml.innerHTML = prezzoFinale;

    let numRandom = Math.ceil(Math.random() * 10);
    carrozza.innerHTML = numRandom;
});

btnAnnulla.addEventListener("click", function () {
    document.getElementById("passenger-name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("selected-age").value = "";
    
} )

