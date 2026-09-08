// Unsere Test-PIN
const richtigePIN = "4827";


// Wird aufgerufen, wenn man "Verbinden" drückt
function verbinden() {

    const eingegebenePIN =
        document.getElementById("pin").value;

    const meldung =
        document.getElementById("meldung");


    if (eingegebenePIN === richtigePIN) {

        // PIN ist richtig
        meldung.textContent = "✅ Verbindung hergestellt!";

        document.getElementById("pinBereich")
            .classList.add("versteckt");

        document.getElementById("klingelBereich")
            .classList.remove("versteckt");

    } else {

        // PIN ist falsch
        meldung.textContent = "❌ Falsche PIN!";
    }
}


// Klingel wurde gedrückt
function klingeln() {

    const meldung =
        document.getElementById("klingelMeldung");

    meldung.textContent =
        "🔔 Klingel wurde gedrückt!";
}


// Verbindung trennen
function trennen() {

    document.getElementById("klingelBereich")
        .classList.add("versteckt");

    document.getElementById("pinBereich")
        .classList.remove("versteckt");

    document.getElementById("pin").value = "";

    document.getElementById("meldung").textContent = "";
}
