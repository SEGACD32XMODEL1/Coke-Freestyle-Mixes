/*fetch("index.js")
    .then((response) => response.json())
    .then((json) => console.log(json));*/

import data from "./drinks.json" assert { type: "json" };
console.log(data);
console.log(data.drinks[0]);

const div = document.createElement("div");
div.classList =
    "columns is-half is-size-2 table-container has-navbar-fixed-top mt-3 is-centered is-fullwidth";

const table = document.createElement("table");
table.classList = "table is-fullwidth";

const tbody = document.createElement("tbody");

for (let i = 0; i < data.drinks.length; i++) {
    let tr = document.createElement("tr");

    if (data.drinks[i]["letter"] != undefined) {
        let td3 = document.createElement("td");
        td3.textContent = data.drinks[i]["letter"];
        td3.id = `#${data.drinks[i]["letter"]}`;

        tr.appendChild(td3);
    } else {
        let td3 = document.createElement("td");
        tr.appendChild(td3);
    }

    let td = document.createElement("td");

    let img = document.createElement("img");
    img.src = data.drinks[i]["image"];
    img.alt = data.drinks[i]["name"];
    img.title = data.drinks[i]["name"];

    td.appendChild(img);

    let td2 = document.createElement("td");
    td2.textContent = data.drinks[i]["code"];

    tr.append(td, td2);
    tbody.appendChild(tr);
}
table.appendChild(tbody);
div.appendChild(table);
document.body.prepend(div);

// Hamburger Menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navlinks");
const imgSelect = document.querySelectorAll("img");

burgerIcon.addEventListener("click", (event) => {
    navbarMenu.classList.toggle("is-active");
    burgerIcon.classList.toggle("is-active");
    event.preventDefault();
});

//imgSelect.forEach((index) => index.classList.add("image"));
