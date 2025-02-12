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
let achievements = 0;
let strawberryLevel = 0;
let strawberryCost = 80000;
let strawberryPasive = 150;
let incomeStrawberry = 0;
let strawberryupLevel = 0;
let strawberryupCost = 1000000;

localStorage.getItem('score')


// Функция для обновления отображения очков и дохода
function updateUI() {
    document.getElementById('score').textContent = score;
    document.getElementById('income').textContent = income;

    // Обновляем текст кнопок с новой стоимостью улучшений
    document.getElementById('upgrade-grass').textContent = `Качество Травы Уровень: ${clickPower} (Цена: ${clickUpgradeCost})`;
    document.getElementById('upgrade-wheat').textContent = `Пшеничка Уровень: ${wheatLevel} (Цена: ${wheatUpgradeCost})`;
    document.getElementById('upgrade-potato').textContent = `Картошечка Уровень: ${potatoLevel} (Цена: ${potatoUpgradeCost})`;
    document.getElementById('upgrade-carrot').textContent = `Морковка Уровень: ${carrotLevel} (Цена: ${carrotUpgradeCost})`;
    document.getElementById('upgrade-wheatup').textContent = `Пшеничный Рай Уровень: ${wheatupLevel} (Цена: ${wheatupCost})`;
    document.getElementById('upgrade-potatoup').textContent = `Боги Беларуси Уровень: ${potatoupLevel} (Цена: ${potatoupCost})`;
    document.getElementById('upgrade-carrotup').textContent = `Огород Копатыча Уровень: ${carrotupLevel} (Цена: ${carrotupCost})`;
    document.getElementById('achievements-eggs').textContent = `Достижения ${achievements}/33`;
    document.getElementById('upgrade-strawberry').textContent = `Малинка Уровень: ${strawberryLevel} (Цена: ${strawberryCost})`;
    document.getElementById('upgrade-strawberryup').textContent = `Лукошко под Малинку Уровень: ${strawberryupLevel} (Цена: ${strawberryupCost})`;
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
    incomeStrawberry = parseInt(localStorage.getItem('income4')) || 0;
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
    achievements = parseInt(localStorage.getItem('achievements')) || 0;
    strawberryCost = parseInt(localStorage.getItem('strawcost')) || 80000;
    strawberryLevel = parseInt(localStorage.getItem('strawlevel')) || 0;
    strawberryPasive = parseInt(localStorage.getItem('strawpas')) || 150;
    strawberryupCost = parseInt(localStorage.getItem('strawupcost')) || 1000000;
    strawberryupLevel = parseInt(localStorage.getItem('strawuplevel')) || 0;

    // Обновляем интерфейс после загрузки данных
    updateUI();
}

function showNotification(message) {
    if (!notificationsEnabled) return; // Если уведомления выключены, ничего не делаем

    const notificationContainer = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    notificationContainer.appendChild(notification);

    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Убираем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500); // Ждем завершения анимации исчезновения
    }, 2000);
}

let notificationsEnabled = true; // По умолчанию уведомления включены

// Функция для переключения уведомлений
function toggleNotifications() {
    const toggle = document.getElementById('notificationToggle');
    notificationsEnabled = toggle.checked;
    localStorage.setItem('notificationsEnabled', notificationsEnabled); // Сохраняем состояние в localStorage
}

// Загрузка состояния уведомлений при запуске
function loadSettings() {
    const savedSetting = localStorage.getItem('notificationsEnabled');
    if (savedSetting !== null) {
        notificationsEnabled = savedSetting === 'true';
        document.getElementById('notificationToggle').checked = notificationsEnabled;
    }
}

// Вызов функции загрузки настроек при запуске
loadSettings();

// Добавляем обработчик события для переключателя
document.getElementById('notificationToggle').addEventListener('change', toggleNotifications);

// Вызываем функцию загрузки прогресса при запуске игры
loadProgress();
// Функция обработки клика по кнопке
function clickButton(type) {
    if (type === 'clicker') {
        score += clickPower; // Увеличиваем очки на силу клика
        if ( score === 1 && clickPower === 1 && income === 0 ) {
            showNotification("Получено достижение Первый Клик (Заработайте свое первое очко)");
            achievements += 1;
        }
        updateUI(); // Обновляем интерфейс
    } else if (type === 'info1') {
        showNotification('Увеличивает стоимость клика на 1');
    } else if (type === 'info2') {
        showNotification('Увеличивает доход в секунду на 1* (В зависимости от уровня прокачки Пшеничный Рай)');
    } else if (type === 'info3') {
        showNotification('Увеличивает доход в секунду на 5* (В зависимости от уровня прокачки Боги Беларуси)');
    } else if (type === 'info4') {
        showNotification('Увеличивает доход в секунду на 30* (В зависимости от уровня прокачки Огород Копатыча)');
    } else if (type === 'info2up') {
        showNotification('Увеличивает стоимость пшеницы в 2 раза');
    } else if (type === 'info3up') {
        showNotification('Увеличивает стоимость картошки в 2 раза');
    } else if (type === 'info4up') {
        showNotification('Увеличивает стоимость морковки в 2 раза');
    } else if (type === 'saveProgress') {
        localStorage.setItem('score', score);
        localStorage.setItem('income', income);
        localStorage.setItem('click', clickPower);
        localStorage.setItem('income1', incomeWheat);
        localStorage.setItem('income2', incomePotato);
        localStorage.setItem('income3', incomeCarrot);
        localStorage.setItem('income4', incomeStrawberry);
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
        localStorage.setItem('achievements', achievements);
        localStorage.setItem('strawcost', strawberryCost);
        localStorage.setItem('strawlevel', strawberryLevel);
        localStorage.setItem('strawpas', strawberryPasive);
        localStorage.setItem('strawuplevel', strawberryupLevel);
        localStorage.setItem('strawupcost', strawberryupCost);
        showNotification('Ваш прогресс успешно сохранен! :3)');
    } else if (type === 'whatnew') {
        alert('Исправлен баг, когда стоимость улучшений имела в себе очень много чисел после запятой');
    } else if (type === 'info5' ) {
        showNotification('Увеличивает доход в секунду на 150* (В зависимости от уровня улучшения Лукошко под Малинку)');
    } else if (type === 'info5up') {
        showNotification('Увеличивает стоимость малинки в 2 раза');
    } else if (type === 'deleteProgress') {
        localStorage.clear();
        location.reload();
    }
}

// Функция покупки улучшений
function buyUpgrade(type) {
    if (type === 'click') {
        if (score >= clickUpgradeCost) {
            score -= clickUpgradeCost; // Вычитаем стоимость улучшения
            clickPower += 1; // Увеличиваем силу клика
            clickUpgradeCost *= 10; // Увеличиваем стоимость следующего улучшения в 2 раза
	        showNotification("Ой, спасибо тебе, внучек. На эти деньги я смогу прожить до пенсии. Пойду траву твою удобрю");
            if ( clickPower === 2 ) {
                showNotification("Получено достижение КликАпдейт (Улучшите Качество Травы первый раз) +2000 опыта");
                score += 2000;
                achievements += 1;
            } else if ( clickPower === 10 ) {
                showNotification("Получено достижение МастерКлика (Получайте по 10 очков за клик) +200000000000 опыта");
                score += 200000000000;
                achievements += 1;
            } else if ( clickPower === 100 ) {
                showNotification("Получено достижение Вы Там Живой? (Получайте по 100 очков за клик) +1 опыт :3");
                score += 1;
                achievements += 1;
            }
            updateUI(); // Обновляем интерфейс
            localStorage.setItem('click', clickPower);
            localStorage.setItem('clickcost', clickUpgradeCost);
        } else {
            showNotification("Внучек ты бомж, мне такие альты не нужны. Иди батрачь!");
        }
    } else if (type === 'wheat') {
        if (score >= wheatUpgradeCost) {
            score -= wheatUpgradeCost;
            incomeWheat += wheatPasive // Вычитаем стоимость улучшения
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry; // Увеличиваем доход в секунду
            wheatUpgradeCost = Math.round(wheatUpgradeCost * 1.1); // Увеличиваем стоимость следующего улучшения в 2 раза
	        wheatLevel += 1;
	        showNotification("Вай брат, держи Лютший пшеница Казахстан!");
            if ( wheatLevel === 1 ) {
                showNotification("Получено достижение Пшеничное Удовольствие (Купите Пшеничку) +50 опыта");
                score += 50;
                achievements += 1;
            } else if ( wheatLevel === 10 ) {
                showNotification("Получено достижение Огород Пшена (Купите 10 Пшеничек) +200 опыта");
                score += 200;
                achievements += 1;
            } else if ( wheatLevel === 100 ) {
                showNotification("Получено достижение Пшеничный Особняк (Купите 100 Пшеничек) +500000 опыта");
                score += 500000;
                achievements += 1;
            } else if ( wheatLevel === 500) {
                showNotification("Получено достижение Пшеничный Безумец (Купите 500 Пшеничек) -1000000 опыта :3");
                score -= 1000000;
                achievements += 1;
            }
            updateUI(); // Обновляем интерфейс
        } else {
            showNotification("Ты со мной торговаться думал. Я Борат Сагдиев торговай только машина Бабий магнит");
        }
    } else if (type === 'potato') {
        if (score >= potatoUpgradeCost) {
            score -= potatoUpgradeCost; // Вычитаем стоимость улучшения
            incomePotato += potatoPasive;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry; // Увеличиваем доход в секунду
            potatoUpgradeCost = Math.round(potatoUpgradeCost * 1.1); // Увеличиваем стоимость следующего улучшения в 2 раза
	        potatoLevel += 1;
	        showNotification("Беларусь гордится тобой. Относись к этому картофелю как к Родине своей. От Лукашенко тебе привет!)");
            if ( potatoLevel === 1 ) {
                showNotification("Получено достижение Истинный Беларус (Купите 1 Картошку) +300 опыта");
                score += 300;
                achievements += 1;
            } else if ( potatoLevel === 10 ) {
                showNotification("Получено достижение Беларус-Домохозяин (Купите 10 Картошек) +1000 опыта");
                score += 1000;
                achievements += 1;
            } else if ( potatoLevel === 100 ) {
                showNotification("Получено достижение Посол из Минска (Купите 100 Картошек) +5000000 опыта");
                score += 5000000;
                achievements += 1;
            } else if ( potatoLevel === 250 ) {
                showNotification("Получено достижение Господин Лукашенко (Купите 250 Картошек) -666 опыта :3");
                score -= 666;
                achievements += 1;
            }
            updateUI(); // Обновляем интерфейс
        } else {
            showNotification("Куда полез молодой, Лукашенко сказал, чтобы ты шел (Censored) со своими копейками");
        }
     } else if (type === 'carrot') {
        if (score >= carrotUpgradeCost) {
            score -= carrotUpgradeCost; // Вычитаем стоимость улучшения
            incomeCarrot += carrotPasive;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry; // Увеличиваем доход в секунду
            carrotUpgradeCost = Math.round( carrotUpgradeCost * 1.1); // Увеличиваем стоимость следующего улучшения в 2 раза
	        carrotLevel += 1;
	        showNotification("Елки-Иголки, Ежик, смотри что выращивает этот овощ. ЭТО ЖЕ МОРКОВЬ");
            if ( carrotLevel === 1 ) {
                showNotification("Получено достижение Кролик (Купите 1 Морковку) +3000 опыта");
                score += 3000;
                achievements += 1;
            } else if ( carrotLevel === 10 ) {
                showNotification("Получено достижение Смешарик (Купите 10 Морковок) +10000 опыта");
                score += 10000;
                achievements += 1;
            } else if ( carrotLevel === 50) {
                showNotification("Получено достижение Ромашковая Долина (Купите 50 Морковок) + 500000 опыта");
                score += 500000;
                achievements += 1;
            } else if ( carrotLevel === 100 ) {
                showNotification("Получено достижение Дикий Кролик (Купите 100 Морковок) + 30000000 опыта");
                score += 30000000;
                achievements += 1;
            } else if ( carrotLevel === 228 ) {
                showNotification("Получено достижение Кролик В Законе (Купите 228 Морковок) -42 опыта :3");
                score -= 42;
                achievements += 1;
            }
            updateUI(); // Обновляем интерфейс
        } else {
            showNotification("Барабудай Рабуди Рабудай. Иди в (Censored) ты и не вылезай. Бабок не хватает, ХАХХАХАХХАХ");
        }
    } else if (type === 'wheatup') {
        if (score >= wheatupCost) {
            score -= wheatupCost;
            incomeWheat *= 2;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry;
            wheatPasive *= 2;
            wheatupCost *= 10;
            wheatupLevel += 1;
            showNotification("Новый пшено будет люче 2 раза. ");
            if ( wheatupLevel === 1 ) {
                showNotification("Получено достижение Сноп Сена (Купите Пшеничный рай 1 раз) +20000 опыта");
                score += 20000;
                achievements += 1;
            } else if ( wheatupLevel === 5 ) {
                showNotification("Получено достижение Сеновал (Купите Пшеничный рай 5 раз) +200000000 опыта");
                score += 200000000;
                achievements += 1;
            } else if ( wheatupLevel === 10) {
                showNotification("Получено достижение СеноМаньяк (Купите Пшенничный рай 10 раз -10000 опыта :3");
                score -= 10000;
                achievements += 1;
            }
            updateUI();
        } else {
            showNotification("Новая сорт пшено Борат не давай, деньга мало");
        }
    } else if (type === 'potatoup') {
        if (score >= potatoupCost) {
            score -= potatoupCost;
            incomePotato *= 2;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry;
            potatoPasive *= 2;
            potatoupCost *= 10;
            potatoupLevel += 1;
            showNotification("Лучший Беларусский бульба летит к тебе от Великих Богов Беларуси!");
            if ( potatoupLevel === 1 ) {
                showNotification("Получено достижение Мешок Картофеля (Купите Богов Беларуси 1 раз) +100000 опыта");
                score += 100000;
                achievements += 1;
            } else if ( potatoupLevel === 5 ) {
                showNotification("Получено достижение Грузовик Картофана (Купите Богов Беларуси 5 раз) +1000000000 опыта");
                score += 1000000000;
                achievements += 1;
            } else if ( potatoupLevel === 10 ) {
                showNotification("Получено достижение Картофельная Страна (Купите Богов Беларуси 10 раз) -1 опыт :3");
                score -= 1;
                achievements += 1;
            }
            updateUI();
        } else {
            showNotification("Думаешь Лукашенко доволен твоим копейкам? Сосал?");
        }
    } else if (type === 'carrotup') {
        if (score >= carrotupCost) {
            score -= carrotupCost;
            incomeCarrot *= 2;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry;
            carrotPasive *= 2;
            carrotupCost *= 10;
            carrotupLevel += 1;
            showNotification("Славный город Кострома. Удобренье из дерьма! (для моркови - сорт копатович");
            if ( carrotupLevel === 1 ) {
                showNotification("Получено достижение КРОШечный Рай (Купите Огород Копатыча 1 раз) +1000000 опыта");
                score += 1000000;
                achievements += 1;
            } else if ( carrotupLevel === 5 ) {
                showNotification("Получено достижение Морковь Мне в Бровь (Купите Огород Копатыча 5 раз) +10000000000 опыта");
                score += 10000000000;
                achievements += 1;
            } else if ( carrotupLevel === 10 ) {
                showNotification("Получено достижение ТЫ БЕЗУМЕЦ!!! (Купите Огород Копатыча 10 раз) +777 опыта");
                score += 777;
                achievements += 1;
            }
            updateUI();
        } else {
            showNotification("Укуси меня пчела, обмануть меня вздумал? Я щас тебя лопатой как...");
        }
    } else if (type === 'strawberry')  {
        if (score >= strawberryCost) {
            score -= strawberryCost;
            incomeStrawberry += strawberryPasive;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry;
            strawberryCost = Math.round(strawberryCost * 1.1);
            strawberryLevel += 1;
            showNotification('Ягодка-малинка оп-оп-оп!');
            if ( strawberryLevel === 1 ) {
                showNotification("Получено достижение Хабиб Не Нурмагомедов (Купите 1 Малинку) +30000 опыта");
                score += 30000;
                achievements += 1;
            } else if ( strawberryLevel === 10 ) {
                showNotification("Получено достижение МинусПростудин (Купите 10 Малинок) +75000 опыта");
                score += 75000;
                achievements += 1;
            } else if ( strawberryLevel === 50 ) {
                showNotification("Получено достижение НЯМ-НЯМ-НЯМ (Купите 50 Малинок) +3000000 опыта");
                score += 3000000;
                achievements += 1;
            } else if ( strawberryLevel === 200) {
                showNotification("Получено достижение Макс Корж с Малиной (Купите 200 Малинок) +322 опыта :3");
                score += 322;
                achievements += 1;
            }
            updateUI();
        } else {
            showNotification('Малина помогает от простуды, а тебе поможет только кредит :3');
        }
    } else if (type === 'strawberryup') {
        if (score >= strawberryupCost) {
            score -= strawberryupCost;
            incomeStrawberry *= 2;
            income = incomeWheat + incomePotato + incomeCarrot + incomeStrawberry;
            strawberryPasive *= 2;
            strawberryupCost *= 10;
            strawberryupLevel += 1;
            showNotification('Малиновый зака-ат о-о-у. Стекает по стене-е!');
            if ( strawberryupLevel === 1 ) {
                showNotification("Получено достижение Малиновый Закат (Купите 1 Лукошко под Малину) +3000000 опыта");
                score += 3000000;
                achievements += 1;
            } else if ( strawberryupLevel === 5 ) {
                showNotification("Получено достижение ВБ МОНСТР (Купите 5 Лукошек под Малину) +30000000000 опыта");
                score += 30000000000;
                achievements += 1;
            } else if (strawberryupLevel === 10 ) {
                showNotification("Получено достижение Малина в Промышленных Масштабах (Купите 10 Лукошек под Малину) -993 опыта :3");
                score -= 993;
                achievements += 1;
            }
            updateUI();
        } else {
            showNotification('Matroskin say: "А я еще и на(CENSORED) послать могу, тебя бомжару так тем более ^_^"');
        }
    }  
}

// Функция для автоматического добавления дохода в секунду
setInterval(function() {
    score += income; // Добавляем доход к очкам
    updateUI(); // Обновляем интерфейс
}, 1000); // Интервал в 1000 мс (1 секунда)
setInterval(function() {
    localStorage.setItem('score', score);
    localStorage.setItem('income', income);
    localStorage.setItem('click', clickPower);
    localStorage.setItem('income1', incomeWheat);
    localStorage.setItem('income2', incomePotato);
    localStorage.setItem('income3', incomeCarrot);
    localStorage.setItem('income4', incomeStrawberry);
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
    localStorage.setItem('achievements', achievements);
    localStorage.setItem('strawcost', strawberryCost);
    localStorage.setItem('strawlevel', strawberryLevel);
    localStorage.setItem('strawpas', strawberryPasive);
    localStorage.setItem('strawuplevel', strawberryupLevel);
    localStorage.setItem('strawupcost', strawberryupCost);
}, 60000);
// Инициализация интерфейса при загрузке страницы
updateUI();