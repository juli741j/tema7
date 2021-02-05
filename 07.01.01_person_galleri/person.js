const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const medieurl = "https://persongalleri-5d3e.restdb.io/media/";

const options = {
    headers: {
        'x-apikey': "600fe9211346a1524ff12e31"
    }
};

async function hentData() {
    const respons = await fetch(url, options);
    const json = await respons.json();
    vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
    console.log(json);
    json.forEach(person => {
        const klon = template.cloneNode(true);
        klon.querySelector(".billede").src = medieurl + person.billede;
        klon.querySelector(".fornavn").textContent = person.fornavn;
        klon.querySelector(".efternavn").textContent = person.efternavn;
        klon.querySelector(".titel").textContent = `Titel: ${person.titel}`;
        klon.querySelector(".hobby").textContent = `Hobby: ${person.hobby}`;
        klon.querySelector(".fødselsdag").textContent = `Fødselsdag: ${person.fødselsdag}`;
        klon.querySelector(".troende").textContent = `Troende: ${person.troende}`;
        main.appendChild(klon);

    })
}
hentData();
