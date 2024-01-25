// Drink Images & Names
import data from "../idcodes/drinks.json" assert { type: "json" };
import data2 from "./mixes.json" assert { type: "json" };

const drinks = data.drinks;
const mixes = data2.mixes;

// Filter Drinks
function getDrink(input) {
    return drinks.find((el) => el.code === input);
}

console.log(mixes[0].drinks[0]);

console.log(getDrink(mixes[0].drinks[1]));

const mainDiv = document.createElement("div");
mainDiv.classList = "is-half is-size-3 mt-6 is-centered"; // is-fullwidth";

for (let i = 0; i < mixes.length; i++) {
    const div = document.createElement("div");
    div.classList = "is-flex";
    div.style = "width: fit-content";
    const h1 = document.createElement("h1");
    h1.textContent = mixes[i].name;
    h1.style = "is-flex-grow-2";
    const divBreak = document.createElement("div");
    divBreak.style = "flex-basis: 100%; height: 0";
    div.append(h1, divBreak);

    let drinkObjs = [];

    let e = 0;

    mixes[i]["drinks"].forEach(() => {
        drinkObjs.push(getDrink(mixes[i].drinks[e]));
        e++;
    });

    console.log(drinkObjs);

    /*const img1 = document.createElement("img");
    img1.src = drinkObjs[0]["image"];
    img1.alt = drinkObjs[0]["name"];
    img1.title = drinkObjs[0]["name"];
    img1.style.marginRight = "1vw";
    const img2 = document.createElement("img");
    img2.src = drinkObjs[1]["image"];
    img2.alt = drinkObjs[1]["name"];
    img2.title = drinkObjs[1]["name"];
    */

    let ratioNum = 0;
    drinkObjs.forEach((f) => {
        let divAlso = document.createElement("div");
        let img = document.createElement("img");
        img.src = f["image"];
        img.alt = f["name"];
        img.title = f["name"];
        let anotherH1 = document.createElement("h1");
        anotherH1.textContent = mixes[i].ratio[ratioNum];
        ratioNum++;
        divAlso.style = "width: fit-content";
        divAlso.append(img, anotherH1);
        div.appendChild(divAlso);
    });

    //const anotherH1 = document.createElement("h1");
    //anotherH1.textContent = mixes[i].ratio;

    //div.append(h1, img1, img2);

    /*
    if (drinkObjs.length === 3) {
        const img3 = document.createElement("img");
        img3.src = drinkObjs[2]["image"];
        img3.alt = drinkObjs[2]["name"];
        img3.title = drinkObjs[2]["name"];
        //img2.style.marginRight = "1vw";
        div.appendChild(img3);
    }
    */

    const hr = document.createElement("hr");

    //div.append(anotherH1, hr);

    mainDiv.appendChild(div);
}

document.body.appendChild(mainDiv);

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
