
class Animal {
    constructor(species, animalName, country, color, imgUrl) { 
this.species = species;
this.animalName = animalName;
this.country = country;
this.color = color;
this.imgUrl = imgUrl;



    }
    feedAnimal(){  //Her er en funksjon for å mate et dyr, i dette tilfelle ravnen
    console.log(`You are now feeding the ${this.animalName}`);
    document.getElementById("feed_btn");
}
}
// Here Ive made two different animal objects. Raven and Tiger. //
let animalOne = new Animal ("Fugl", "Ravn", "Norge", "Sort", "<img src=/img/raven.jpg>");  

document.getElementById("animal-name_one").innerHTML =animalOne.animalName;
document.getElementById("animal-species_one").innerHTML = animalOne.species;
document.getElementById("animal-color_one").innerHTML = animalOne.color;
document.getElementById("animal-img_one").innerHTML = animalOne.imgUrl;


let animalTwo = new Animal ("Kattedyr", "Sibirsk Tiger", "Sibir/Kina/Nord-Korea", "Hvit/Orange", "<img src=/img/tiger.jpeg>");

document.getElementById("animal-name_two").innerHTML = animalTwo.animalName;
document.getElementById("animal-species_two").innerHTML =animalTwo.species;
document.getElementById("animal-color_two").innerHTML = animalTwo.color;
document.getElementById("animal-img_two").innerHTML = animalTwo.imgUrl;

animalOne.feedAnimal();

console.log(animalOne.animalName);
console.log(animalOne.color);
console.log(animalOne.imgUrl);
console.log(animalOne.country);
