const expensesCount = 2;

const money = +prompt("Ваш бюджет на месяц?", 0);
const time = prompt("Введите дату в формате YYYY-MM-DD", "1991-01-01");

const appData = {
  budget: money,
  timeData: time,
  optionalExpenses: {},
  income: [],
  savings: false
};

function readExpenses(expensesCount = 2) {
  const expenses = {};

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
      expenses[expense] = cost;
    } else {
      index = index - 1;
    }
  }

  return expenses;
}

function getBudgetLevel(budget) {
  const budgetPerDay = appData.budget / 30;
  let result = "";

  if (budgetPerDay < 100) {
    result = "Минимальный уровень достатка";
  } else if (budgetPerDay > 100 && budgetPerDay < 2000) {
    result = "Средний уровень достатка";
  } else if (budgetPerDay > 2000) {
    result = "Высокий уровень достатка";
  } else {
    result = "Произошла ошибка";
  }

  return result;
}

function checkSavings() {
  if (appData.savings == true) {
    const save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();

appData.expenses = readExpenses(expensesCount);

alert(`Бюджет на 1 день ${appData.budget / 30}`);
console.log(getBudgetLevel(appData.budget));
