let money, time, answerFirst,answerSecond;

money = +prompt("ваш бюджет на месяц?");

time = prompt ("Введите дату в формате YYYY-MM-DD");

answerFirst = prompt("Введите обязательную статью расходов в этом месяце")

answerSecond = prompt("Во сколько обойдется?")
let budget = money, timeData = time  ;
let appData = {
    budget : budget,
    timeData : timeData,
    arr:[],
    savings : false
}
alert("ваш бюджет на 1 день: " + money/30   );
