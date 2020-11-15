let element = document.createElement("p");
let element1 = document.createElement("p");
element.textContent = 2500;
element1.textContent = 1500;

makeCount(element, 1500);
makeCount(element1, 2000);

function makeCount(el, wait) {
    let start;
    setInterval(count, wait);

    function count() {
        start++;
        el.textContent = start;

    }
};