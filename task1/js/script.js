const expensesCount = 2;

const money = +prompt("Ваш бюджет на месяц?", 0);
const time = prompt("Введите дату в формате YYYY-MM-DD", "1991-01-01");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  moneyPerDay: 0,
  savings: false,
  monthIncome: 0,
  chooseExpenses: function(expensesCount = 2) {
    for (let index = 0; index < expensesCount; index++) {
      const expense = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      );
      const cost = +prompt("Во сколько обойдется?", 0);

      if (
        typeof expense === "string" &&
        typeof expense != null &&
        typeof cost != null &&
        expense != "" &&
        cost != "" &&
        expense.length < 50
      ) {
        console.log("done");
        this.expenses[expense] = cost;
      } else {
        index = index - 1;
      }
    }
  },
  detectDayBudhet: function() {
    this.moneyPerDay = (this.budget / 30).toFixed();
    alert(`Бюджет на 1 день ${this.moneyPerDay}`);
  },
  detectLevel: function() {
    let result = "";

    if (this.moneyPerDay < 100) {
      result = "Минимальный уровень достатка";
    } else if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
      result = "Средний уровень достатка";
    } else if (this.moneyPerDay > 2000) {
      result = "Высокий уровень достатка";
    } else {
      result = "Произошла ошибка";
    }

    console.log(result);
  },
  checkSavings: function() {
    if (this.savings == true) {
      const save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      this.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + this.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let index = 1; index < 3; index++) {
      let opt = prompt("Статья необязательных расходов?", "");
      this.optionalExpenses[index] = opt;
    }
  },
  chooseIncome: function() {
    let items = "",
      additionalIncome = "";

    do {
      items = prompt(
        "Что принесёт дополнительный доход? (Перечислите через запятую)",
        ""
      );
    } while (typeof items != "string" || typeof items == null || items == "");

    this.income = items.split(",");

    do {
      additionalIncome = prompt("Может что-то ещё?", "");
    } while (
      typeof additionalIncome != "string" ||
      typeof additionalIncome == null ||
      additionalIncome == ""
    );

    this.income.push(additionalIncome);

    this.income.sort();
    console.log("Способы доп. заработка:");
    this.income.forEach((element, index) => console.log(index + " " + element));
  },
  getInfo: function() {
    console.log("Наша программа включает в себя данные:");
    for (const key in this) {
      console.log(this[key]);
    }
  }
};
