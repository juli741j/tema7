const url = "https://babushka-dd8a.restdb.io/rest/menu";

const medieurl = "https://babushka-dd8a.restdb.io/media/";

const options = {
    headers: {
        'x-apikey': "600ec2fb1346a1524ff12de4"
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
    json.forEach(mad => {
        const klon = template.cloneNode(true);
        klon.querySelector(".billede").src = medieurl + mad.billede;
        klon.querySelector(".navn").textContent = mad.navn;
        klon.querySelector(".kortbeskrivelse").textContent = mad.kortbeskrivelse;
        klon.querySelector(".pris").textContent = `Pris: ${mad.pris},-`;
        main.appendChild(klon);

    })
}
hentData();
