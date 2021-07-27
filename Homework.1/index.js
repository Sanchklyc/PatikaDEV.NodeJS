let name = prompt("Lütfen isminizi giriniz.");


let greetingElement = document.getElementById("greetingParagraph");
greetingElement.innerHTML = name ? `Merhaba ${name}, Hoş geldin.` : ``;

let dateElement = document.getElementById("dateParagraph");

updateDate();

function updateDate(){
    let todayDate = new Date();
    dateElement.innerHTML = todayDate.toLocaleDateString("TR") + ' ' + todayDate.toLocaleTimeString("TR");
    setTimeout(() => {
        updateDate();
    }, 1000);
}