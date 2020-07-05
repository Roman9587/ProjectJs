
let money = prompt("ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

//    if (typeof(money === 'number') && typeof(money) != null && money != "" && typeof(time === 'number') && typeof(time) != null && time != "" ) {
       
//    }
    
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    income : [],
    optionalExpenses : {},
    savings : false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && typeof (a) != null && a != "" && typeof (b) === 'number' && typeof (b) != null && b != "") {
        appData.expenses[a] = b;
    } else {
        if(i > 0) {
            i--;
            console.log("Отнялось " + i);
        }else{
            i = -1;
            console.log("Обнление " + i);
        }
    }
}





alert("ваш бюджет на 1 день: " + (appData.budget / 30).toFixed());
