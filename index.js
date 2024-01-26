document.addEventListener("DOMContentLoaded", () => {
    // Task 1
    let name = prompt("Як вас звати?");
    alert("Привіт, " + name + "!");

    // Task 2
    let birthYear = prompt("У якому році ви народилися?");
    const currentYear = 2024;
    let age = currentYear - birthYear;
    alert("Вам " + age + " років");

    // Task 3
    let side = prompt("Введіть довжину сторони квадрата");
    let perimeter = 4 * side;
    alert("Периметр квадрата дорівнює " + perimeter);

    // Task 4
    let radius = prompt("Введіть радіус кола");
    let area = Math.PI * radius * radius;
    alert("Площа кола дорівнює " + area);

    // Task 5
    let distance = prompt("Введіть відстань у кілометрах між двома містами");
    let time = prompt("За скільки годин ви хочете дістатися?");
    let speed = distance / time;
    alert("Вам потрібно рухатися зі швидкістю " + speed + " км/год");

    // Task 6
    let dollars = prompt("Введіть суму в доларах");
    const rate = 0.85;
    let euros = dollars * rate;
    alert("Ви можете отримати " + euros + " євро");

    // Task 7
    let capacity = prompt("Введіть обсяг флешки у ГБ");
    let files = Math.floor(capacity * 1024 / 820);
    alert("На флешку вміститься " + files + " файлів розміром 820 МБ");

    // Task 8
    let money = prompt("Введіть суму грошей у гаманці");
    let price = prompt("Введіть вартість однієї шоколадки");
    let chocolates = Math.floor(money / price);
    let change = money % price;
    alert("Ви можете купити " + chocolates + " шоколадок і у вас залишиться " + change + " грошей");

    // Task 9
    let number = prompt("Введіть тризначне число");
    let firstDigit = number % 10;
    let secondDigit = Math.floor(number / 10) % 10;
    let thirdDigit = Math.floor(number / 100);
    let palindrome = firstDigit * 100 + secondDigit * 10 + thirdDigit;
    alert("Паліндром вашого числа - " + palindrome);

    // Task 10
    let integer = prompt("Введіть ціле число");
    let even = integer % 2 == 0;
    let odd = integer % 2 != 0;
    alert("Ваше число " + (even && "парне") + (odd && "непарне"));
})