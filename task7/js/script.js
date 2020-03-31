const expensesCount = 2;

const btnStart = document.getElementById("start"),
  budgetValue = document.querySelector(".budget-value"),
  daybudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  monthsavingsValue = document.querySelector(".monthsavings-value"),
  yearsavingsValue = document.querySelector(".yearsavings-value"),
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesItemBtn = document.querySelector("button.expenses-item-btn"),
  optionalexpensesBtn = document.querySelector("button.optionalexpenses-btn"),
  countBudgetBtn = document.querySelector("button.count-budget-btn"),
  optionalexpensesItems = document.querySelectorAll(
    "input.optionalexpenses-item"
  ),
  chooseIncome = document.querySelector(".choose-income"),
  savings = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

const appData = {
  budget: undefined,
  timeData: "",
  expenses: {},
  optionalExpenses: {},
  income: [],
  moneyPerDay: 0,
  savings: false,
  monthIncome: 0,
  yearIncome: 0
};

btnStart.addEventListener("click", () => {
  let time = prompt("Введите дату в формате YYYY-MM-DD", "1991-01-01");
  let money = +prompt("Ваш бюджет на месяц?", 0);

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 0);
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed(2);
  const inputDate = new Date(Date.parse(time));
  yearValue.value = inputDate.getFullYear();
  monthValue.value = inputDate.getMonth() + 1;
  dayValue.value = inputDate.getDate();
});

expensesItemBtn.addEventListener("click", () => {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    const expense = expensesItem[i].value;
    const cost = expensesItem[++i].value;

    if (
      typeof expense === "string" &&
      typeof expense != null &&
      typeof cost != null &&
      expense != "" &&
      cost != "" &&
      expense.length < 50
    ) {
      console.log("done");
      appData.expenses[expense] = cost;
      sum += +cost;
    } else {
      i = i - 2;
    }
  }
  expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener("click", () => {
  for (let i = 0; i < optionalexpensesItems.length; i++) {
    let opt = optionalexpensesItems[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudgetBtn.addEventListener("click", () => {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      result = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      result = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      result = "Высокий уровень достатка";
    } else {
      result = "Произошла ошибка";
    }

    levelValue.textContent = result;
  } else {
    daybudgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener("input", () => {
  let items = chooseIncome.value;
  appData.income = items.split(",");
  incomeValue.textContent = appData.income;
});

savings.addEventListener("click", () => {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.yearIncome = (sum / 100) * percent;
    appData.monthIncome = (sum / 100 / 12) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", () => {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.yearIncome = (sum / 100) * percent;
    appData.monthIncome = (sum / 100 / 12) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
