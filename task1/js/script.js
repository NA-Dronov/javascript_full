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
    expenses[expense] = cost;
  }

  return expenses;
}

appData.expenses = readExpenses(expensesCount);

alert(`Бюджет на 1 день ${appData.budget / 30}`);

console.log(appData);
