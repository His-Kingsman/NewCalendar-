const currentDate = document.querySelector(".date");
let date = new Date();
(currYear = date.getFullYear()), (currMonth = date.getMonth());
backnext = document.querySelectorAll(".icons span");

const renderCalender = () => {
  const Days = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // SpecialDates = {
  //     "My Birthday": [6, 25],
  //     "Mum's Birthday": [4, 28],
  //     "Dad's Birthday": [1, 17],
  //     Christmas: [11, 24],
  //     "Boxing Day": [11, 25],
  //     "New Year": [0, 0],
  //     "New Year Holiday": [0, 1],
  //     "Good Friday": [3, 6],
  //     "Easter Monday": [3, 10],
  //     "Id El Fitr": [3, 21],
  //     "Id El Fitr Holiday": [3, 22],
  //     "Workers Day": [4, 0],
  //     "Childrens Day": [4, 26],
  //     "Democracy Day": [5, 11],
  //     "Id El Kabir": [5, 27],
  //     "Id El Kabir Holiday": [5, 28],
  //     "Id El Maluud": [8, 26],
  //     "Independence Day": [9, 0],
  //     "Independence Day Holiday": [9, 1],
  //   };

  const highlights = [
    { months: 6, days: 26, class: "birthday" },
    { months: 1, days: 17, class: "birthday1" },
    { months: 4, days: 28, class: "birthday2" },
    { months: 11, days: 24, class: "holiday" },
    { months: 11, days: 25, class: "holiday" },
    { months: 0, days: 0, class: "holiday" },
    { months: 0, days: 1, class: "holiday" },
    { months: 3, days: 10, class: "holiday" },
    { months: 3, days: 21, class: "holiday" },
    { months: 3, days: 22, class: "holiday" },
    { months: 4, days: 0, class: "holiday" },
    { months: 4, days: 26, class: "holiday" },
    { months: 5, days: 11, class: "holiday" },
    { months: 5, days: 27, class: "holiday" },
    { months: 5, days: 28, class: "holiday" },
    { months: 8, days: 26, class: "holiday" },
    { months: 9, days: 0, class: "holiday" },
    { months: 9, days: 1, class: "holiday" },
  ];
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="previous">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const highlight = highlights.find((high) => {
      return high.days === i && high.months === date.getMonth();
    });

    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else if (highlight) {
      days += `<div class="${highlight.class}">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next">${j}</div>`;
    Days.innerHTML = days;
  }
};

document.querySelector(".back").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
});

renderCalender();
