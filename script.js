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
let potatoupLevel = 0;
let potatoupCost = 30000;
let carrotupLevel = 0;
let carrotupCost = 250000;

localStorage.getItem('score')


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
    document.getElementById('upgrade-potatoup').textContent = `Боги Беларуси Уровень: ${potatoupLevel} (Цена: ${potatoupCost})`;
    document.getElementById('upgrade-carrotup').textContent = `Огород Копатыча Уровень: ${carrotupLevel} (Цена: ${carrotupCost})`;
}

// Функция для загрузки прогресса
function loadProgress() {
    // Загружаем значения из localStorage
    score = parseInt(localStorage.getItem('score')) || 0;
    income = parseInt(localStorage.getItem('income')) || 0;
    clickPower = parseInt(localStorage.getItem('click')) || 1;
    incomeWheat = parseInt(localStorage.getItem('income1')) || 0;
    incomePotato = parseInt(localStorage.getItem('income2')) || 0;
    incomeCarrot = parseInt(localStorage.getItem('income3')) || 0;
    clickUpgradeCost = parseInt(localStorage.getItem('clickcost')) || 1000;
    wheatUpgradeCost = parseInt(localStorage.getItem('wheatcost')) || 150;
    wheatLevel = parseInt(localStorage.getItem('wheatlevel')) || 0;
    wheatPasive = parseInt(localStorage.getItem('wheatpas')) || 1;
    potatoUpgradeCost = parseInt(localStorage.getItem('potatocost')) || 1000;
    potatoLevel = parseInt(localStorage.getItem('potatolevel')) || 0;
    potatoPasive = parseInt(localStorage.getItem('potatopas')) || 5;
    carrotUpgradeCost = parseInt(localStorage.getItem('carrotcost')) || 10000;
    carrotLevel = parseInt(localStorage.getItem('carrotlevel')) || 0;
    carrotPasive = parseInt(localStorage.getItem('carrotpas')) || 30;
    wheatupLevel = parseInt(localStorage.getItem('wheatuplevel')) || 0;
    wheatupCost = parseInt(localStorage.getItem('wheatupcost')) || 5000;
    potatoupLevel = parseInt(localStorage.getItem('potatouplevel')) || 0;
    potatoupCost = parseInt(localStorage.getItem('potatoupcost')) || 30000;
    carrotupLevel = parseInt(localStorage.getItem('carrotuplevel')) || 0;
    carrotupCost = parseInt(localStorage.getItem('carrotupcost')) || 250000;

    // Обновляем интерфейс после загрузки данных
    updateUI();
}

// Вызываем функцию загрузки прогресса при запуске игры
loadProgress();
// Функция обработки клика по кнопке
function clickButton(type) {
    if (type === 'clicker') {
        score += clickPower; // Увеличиваем очки на силу клика
        updateUI(); // Обновляем интерфейс
        localStorage.setItem('score', score);
    } else if (type === 'info1') {
        alert('Увеличивает стоимость клика на 1');
    } else if (type === 'info2') {
        alert('Увеличивает доход в секунду на 1* (В зависимости от уровня прокачки Пшеничный Рай)');
    } else if (type === 'info3') {
        alert('Увеличивает доход в секунду на 5* (В зависимости от уровня прокачки Боги Беларуси)');
    } else if (type === 'info4') {
        alert('Увеличивает доход в секунду на 30* (В зависимости от уровня прокачки Огород Копатыча)');
    } else if (type === 'info2up') {
        alert('Увеличивает стоимость пшеницы в 2 раза');
    } else if (type === 'info3up') {
        alert('Увеличивает стоимость картошки в 2 раза');
    } else if (type === 'info4up') {
        alert('Увеличивает стоимость морковки в 2 раза');
    } else if (type === 'saveProgress') {
        localStorage.setItem('score', score);
        localStorage.setItem('income', income);
        localStorage.setItem('click', clickPower);
        localStorage.setItem('income1', incomeWheat);
        localStorage.setItem('income2', incomePotato);
        localStorage.setItem('income3', incomeCarrot);
        localStorage.setItem('clickcost', clickUpgradeCost);
        localStorage.setItem('wheatcost', wheatUpgradeCost);
        localStorage.setItem('wheatlevel', wheatLevel);
        localStorage.setItem('wheatpas', wheatPasive);
        localStorage.setItem('potatocost', potatoUpgradeCost);
        localStorage.setItem('potatolevel', potatoLevel);
        localStorage.setItem('potatopas', potatoPasive);
        localStorage.setItem('carrotcost', carrotUpgradeCost);
        localStorage.setItem('carrotlevel', carrotLevel);
        localStorage.setItem('carrotpas', carrotPasive);
        localStorage.setItem('wheatuplevel', wheatupLevel);
        localStorage.setItem('wheatupcost', wheatupCost);
        localStorage.setItem('potatouplevel', potatoupLevel);
        localStorage.setItem('potatoupcost', potatoupCost);
        localStorage.setItem('carrotuplevel', carrotupLevel);
        localStorage.setItem('carrotupcost', carrotupCost);
        alert('Ваш прогресс успешно сохранен! (хоть я и говорил, что он сохраняется каждую секунду :3)');
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
            localStorage.setItem('click', clickPower);
            localStorage.setItem('clickcost', clickUpgradeCost);
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
            updateUI();

        } else {
            alert("Новая сорт пшено Борат не давай, деньга мало");
        }
    } else if (type === 'potatoup') {
        if (score >= potatoupCost) {
            score -= potatoupCost;
            incomePotato *= 2;
            income = incomeWheat + incomePotato + incomeCarrot;
            potatoPasive *= 2;
            potatoupCost *= 10;
            potatoupLevel += 1;
            alert("Лучший Беларусский бульба летит к тебе от Великих Богов Беларуси!");
            updateUI();
        } else {
            alert("Думаешь Лукашенко доволен твоим копейкам? Сосал?");
        }
    } else if (type === 'carrotup') {
        if (score >= carrotupCost) {
            score -= carrotupCost;
            incomeCarrot *= 2;
            income = incomeWheat + incomePotato + incomeCarrot;
            carrotPasive *= 2;
            carrotupCost *= 10;
            carrotupLevel += 1;
            alert("Славный город Кострома. Удобренье из дерьма! (для моркови - сорт копатович");
            updateUI();
        } else {
            alert("Укуси меня пчела, обмануть меня вздумал? Я щас тебя лопатой как...");
        }
    }           
}

// Функция для автоматического добавления дохода в секунду
setInterval(function() {
    score += income; // Добавляем доход к очкам
    updateUI(); // Обновляем интерфейс
    localStorage.setItem('score', score);
    localStorage.setItem('income', income);
    localStorage.setItem('click', clickPower);
    localStorage.setItem('income1', incomeWheat);
    localStorage.setItem('income2', incomePotato);
    localStorage.setItem('income3', incomeCarrot);
    localStorage.setItem('clickcost', clickUpgradeCost);
    localStorage.setItem('wheatcost', wheatUpgradeCost);
    localStorage.setItem('wheatlevel', wheatLevel);
    localStorage.setItem('wheatpas', wheatPasive);
    localStorage.setItem('potatocost', potatoUpgradeCost);
    localStorage.setItem('potatolevel', potatoLevel);
    localStorage.setItem('potatopas', potatoPasive);
    localStorage.setItem('carrotcost', carrotUpgradeCost);
    localStorage.setItem('carrotlevel', carrotLevel);
    localStorage.setItem('carrotpas', carrotPasive);
    localStorage.setItem('wheatuplevel', wheatupLevel);
    localStorage.setItem('wheatupcost', wheatupCost);
    localStorage.setItem('potatouplevel', potatoupLevel);
    localStorage.setItem('potatoupcost', potatoupCost);
    localStorage.setItem('carrotuplevel', carrotupLevel);
    localStorage.setItem('carrotupcost', carrotupCost);
}, 1000); // Интервал в 1000 мс (1 секунда)

// Инициализация интерфейса при загрузке страницы
updateUI();