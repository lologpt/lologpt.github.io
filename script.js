// Инициализация переменных
let score = 0; // Текущее количество очков
let income = 0; // Доход в секунду
let clickPower = 1; // Сила клика (сколько очков добавляется за один клик)

// Переменные для хранения стоимости улучшений
let incomeWheat = 0;
let incomePotato = 0;
let incomeCarrot = 0;
let clickUpgradeCost = 1000; // Начальная стоимость улучшения клика
let wheatUpgradeCost = 150; // Начальная стоимость улучшения дохода
let wheatLevel = 0;
let wheatPasive = 1;
let potatoUpgradeCost = 1000;
let potatoLevel = 0;
let potatoPasive = 5;
let carrotUpgradeCost = 10000;
let carrotLevel = 0;
let carrotPasive = 30;
let wheatupLevel = 0;
let wheatupCost = 5000;


// Функция для обновления отображения очков и дохода
function updateUI() {
    document.getElementById('score').textContent = score;
    document.getElementById('income').textContent = income;

    // Обновляем текст кнопок с новой стоимостью улучшений
    document.getElementById('upgrade-grass').textContent = `Качество травы (Цена: ${clickUpgradeCost})`;
    document.getElementById('upgrade-wheat').textContent = `Пшеничка Уровень: ${wheatLevel} (Цена: ${wheatUpgradeCost})`;
    document.getElementById('upgrade-potato').textContent = `Картошечка Уровень: ${potatoLevel} (Цена: ${potatoUpgradeCost})`;
    document.getElementById('upgrade-carrot').textContent = `Морковка Уровень: ${carrotLevel} (Цена: ${carrotUpgradeCost})`;
    document.getElementById('upgrade-wheatup').textContent = `Пшеничный Рай Уровень: ${wheatupLevel} (Цена: ${wheatupCost})`;
}

// Функция обработки клика по кнопке
function clickButton(type) {
    if (type === 'clicker') {
        score += clickPower; // Увеличиваем очки на силу клика
        updateUI(); // Обновляем интерфейс
    } else if (type === 'info1') {
        alert('Увеличивает стоимость клика на 1');
    } else if (type === 'info2') {
        alert('Увеличивает доход в секунду на 1* (В зависимости от уровня прокачки Пшеничный Рай');
    } else if (type === 'info3') {
        alert('Увеличивает доход в секунду на 5');
    } else if (type === 'info4') {
        alert('Увеличивает доход в секунду на 30');
    } else if (type === 'info2up') {
        alert('Увеличивает стоимость пшеницы в 2 раза');
    }



}

// Функция покупки улучшений
function buyUpgrade(type) {
    if (type === 'click') {
        if (score >= clickUpgradeCost) {
            score -= clickUpgradeCost; // Вычитаем стоимость улучшения
            clickPower += 1; // Увеличиваем силу клика
            clickUpgradeCost *= 10; // Увеличиваем стоимость следующего улучшения в 2 раза
	    alert("Ой, спасибо тебе, внучек. На эти деньги я смогу прожить до пенсии. Пойду траву твою удобрю")
            updateUI(); // Обновляем интерфейс
        } else {
            alert("Внучек ты бомж, мне такие альты не нужны. Иди батрачь!");
        }
    } else if (type === 'wheat') {
        if (score >= wheatUpgradeCost) {
            score -= wheatUpgradeCost;
            incomeWheat += wheatPasive // Вычитаем стоимость улучшения
            income = incomeWheat + incomePotato + incomeCarrot; // Увеличиваем доход в секунду
            wheatUpgradeCost *= 1.1; // Увеличиваем стоимость следующего улучшения в 2 раза
	    wheatLevel += 1;
	    alert("Вай брат, держи Лютший пшеница Казахстан!")
            updateUI(); // Обновляем интерфейс
        } else {
            alert("Ты со мной торговаться думал. Я Борат Сагдиев торговай только машина Бабий магнит");
        }
    } else if (type === 'potato') {
        if (score >= potatoUpgradeCost) {
            score -= potatoUpgradeCost; // Вычитаем стоимость улучшения
            incomePotato += potatoPasive;
            income = incomeWheat + incomePotato + incomeCarrot; // Увеличиваем доход в секунду
            potatoUpgradeCost *= 1.1; // Увеличиваем стоимость следующего улучшения в 2 раза
	    potatoLevel += 1;
	    alert("Беларусь гордится тобой. Относись к этому картофелю как к Родине своей. От Лукашенко тебе привет!)")
            updateUI(); // Обновляем интерфейс
        } else {
            alert("Куда полез молодой, Лукашенко сказал, чтобы ты шел (Censored) со своими копейками");
        }
     } else if (type === 'carrot') {
        if (score >= carrotUpgradeCost) {
            score -= carrotUpgradeCost; // Вычитаем стоимость улучшения
            incomeCarrot += carrotPasive;
            income = incomeWheat + incomePotato + incomeCarrot; // Увеличиваем доход в секунду

            carrotUpgradeCost *= 1.1; // Увеличиваем стоимость следующего улучшения в 2 раза
	    carrotLevel += 1;
	    alert("Елки-Иголки, Ежик, смотри что выращивает этот овощ. ЭТО ЖЕ МОРКОВЬ")
            updateUI(); // Обновляем интерфейс
        } else {
            alert("Барабудай Рабуди Рабудай. Иди в (Censored) ты и не вылезай. Бабок не хватает, ХАХХАХАХХАХ");
        }
    } else if (type === 'wheatup') {
        if (score >= wheatupCost) {
            score -= wheatupCost;
            incomeWheat *= 2;
            income = incomeWheat + incomePotato + incomeCarrot;
            wheatPasive *= 2;
            wheatupCost *= 10;
            wheatupLevel += 1;
            alert("Новый пшено будет люче 2 раза. ");
        } else {
            alert("Новая сорт пшено Борат не давай, деньга мало");
        }
    }
}

// Функция для автоматического добавления дохода в секунду
setInterval(function() {
    score += income; // Добавляем доход к очкам
    updateUI(); // Обновляем интерфейс
}, 1000); // Интервал в 1000 мс (1 секунда)

// Инициализация интерфейса при загрузке страницы
updateUI();