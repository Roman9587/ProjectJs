let money, time;

function start() {
    money = +prompt("ваш бюджет на месяц?", "");
    while (money == "" || money == null || isNaN(money)) {
        money = +prompt("ваш бюджет на месяц?", "");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


}

start();
  
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    income : [],
    optionalExpenses : {},
    savings : true,
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");
        //if (typeof (a) === 'string' && typeof (a) != null && a != "" && typeof (b) === 'number' && typeof (b) != null && b != "") {// использовать isNaN
        
        while ( b == "" || b == null || isNaN(b) || a == "" || a == null || typeof(a) === isNaN("")){
            b = +prompt("Во сколько обойдется?", "");
            a = prompt("Введите обязательную статью расходов в этом месяце", "");
            appData.expenses[a] = b;
        } 
        
    }
}

chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
    alert("ваш бюджет на 1 день: " + appData.moneyPerDay);
}

detectDayBudget()


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Низкий уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000) {
        alert("Средний уровень дохода!");
    } else {
        alert("Высокий уровень дохода!");
    }
}

detectLevel()
// средний уровень достатка диапазон от 100 до 1000
// высокий от 1000
// обработать ошибку



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какая у вас сумма накоплений?",""),
            percent = +prompt("Под какой процент годовых?","");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход с депозита в месяц: " + appData.monthIncome);
    } else {
        alert("У вас нет накоплений!");
    }
}

checkSavings();

function chooseOptExpenses(){
    for (i = 1; i < 4; i++){
        let answer;
        while ( answer == "" || answer == null){
            answer = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = answer;
        }
    }
}

chooseOptExpenses()

