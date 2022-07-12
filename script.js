var traveler = document.getElementById("traveler");
var amber = document.getElementById("amber");
var kaeya = document.getElementById("kaeya");
var lisa = document.getElementById("lisa");
var footer = document.querySelector("footer");

traveler.addEventListener("mouseover", function() {
	footer.textContent = "Traveler";
})

amber.addEventListener("mouseover", function() {
	footer.textContent = "Amber";
})

kaeya.addEventListener("mouseover", function() {
	footer.textContent = "Kaeya";
})

lisa.addEventListener("mouseover", function() {
	footer.textContent = "Lisa";
})

/*const first = () => {
    let counter = 0;
    const second = () => {
        counter += 1;
        alert(counter);
    }
    return second;
}

let newFunc = first();
newFunc();*/

