//первое
var button = prompt("Введите год вашего рождения:"); // я не знала что там вместо button написать(
const age = Number(prompt())
console.log(2023-2007)

//второе
var country = prompt("Введите название страны:");
var capital = prompt("Введите столицу этой страны:");
var countries = {
    "Россия": "Москва",
    "Франция": "Париж",
    "Германия": "Берлин",
    "Италия": "Рим",
};
if (countries[country] === capital) {
    console.log("Поздравляем, вы правильно ввели столицу страны " + country + " - " + capital + ".");
} else {
    console.log("К сожалению, вы ошиблись. Столица страны " + country + " - это " + countries[country] + ".");
}

