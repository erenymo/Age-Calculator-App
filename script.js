'use strict';

// Selecting Elements
let inputDayEl = document.querySelector('#input-day');
let inputMonthEl = document.querySelector('#input-month');
let inputYearEl = document.querySelector('#input-year');

let screenYearEl = document.querySelector('.screen-year');
let screenMonthEl = document.querySelector('.screen-month');
let screenDayEl = document.querySelector('.screen-day');

const dayText = document.querySelector('.day-text');
const monthText = document.querySelector('.month-text');
const yearText = document.querySelector('.year-text');

//Current Date
let currentDate = new Date();

const errorYearEl = document.querySelector('.error-year');
const errorMonthEl = document.querySelector('.error-month');
const errorDayEl = document.querySelector('.error-day');

const calculateButton = document.querySelector('.calculate-button');

// Calculating Age
const calculateAge = function () {
  let displayYear = currentDate.getFullYear() - inputYearEl.value;
  let displayMonth = currentDate.getMonth() - inputMonthEl.value;
  let displayDay = currentDate.getDate() - inputDayEl.value;

  if (displayDay < 0) {
    displayMonth--;
    displayDay += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (displayMonth < 0) {
    displayYear--;
    displayMonth += 12;
  }

  screenYearEl.textContent = displayYear;
  screenMonthEl.textContent = displayMonth + 1;
  screenDayEl.textContent = displayDay;
};

// if all of these are true, then calculate age.
let isDayTrue = false;
let isMonthTrue = false;
let isYearTrue = false;

calculateButton.addEventListener('click', function () {
  console.log(inputDayEl.value);
  console.log(inputMonthEl.value);
  console.log(inputYearEl.value);

  // DAY CHECKER
  if (inputDayEl.value <= 0 || inputDayEl.value > 30) {
    if (
      //Jan March May July Aug Oct Dec -Check
      (inputMonthEl.value == 1 ||
        inputMonthEl.value == 3 ||
        inputMonthEl.value == 5 ||
        inputMonthEl.value == 7 ||
        inputMonthEl.value == 8 ||
        inputMonthEl.value == 10 ||
        inputMonthEl.value == 12) &&
      inputDayEl.value == 31
    ) {
      isDayTrue = true;
    } else {
      isDayTrue = false;
    }
  } else if (
    // February Check
    (inputMonthEl.value == 2 &&
      inputDayEl.value == 29 &&
      !(inputYearEl.value % 4 == 0)) ||
    (inputMonthEl.value == 2 && inputDayEl.value == 30)
  ) {
    isDayTrue = false;
  } else {
    isDayTrue = true;
  }
  // displaying day error message
  if (isDayTrue == false) {
    errorDayEl.classList.remove('hidden');
    dayText.classList.add('text-lightRed');
    inputDayEl.classList.add('border-lightRed');
  } else {
    errorDayEl.classList.add('hidden');
    dayText.classList.remove('text-lightRed');
    inputDayEl.classList.remove('border-lightRed');
  }

  // MONTH CHECKER
  if (inputMonthEl.value <= 0 || inputMonthEl.value > 12) {
    isMonthTrue = false;
  } else {
    isMonthTrue = true;
  }

  // displaying month error message
  if (isMonthTrue == false) {
    errorMonthEl.classList.remove('hidden');
    monthText.classList.add('text-lightRed');
    inputMonthEl.classList.add('border-lightRed');
  } else {
    errorMonthEl.classList.add('hidden');
    monthText.classList.remove('text-lightRed');
    inputMonthEl.classList.remove('border-lightRed');
  }

  // YEAR CHECKER
  if (inputYearEl.value > currentDate.getFullYear() || inputYearEl.value <= 0) {
    isYearTrue = false;
  } else {
    isYearTrue = true;
  }

  // displaying year error message
  if (isYearTrue == false) {
    errorYearEl.classList.remove('hidden');
    yearText.classList.add('text-lightRed');
    inputYearEl.classList.add('border-lightRed');
  } else {
    errorYearEl.classList.add('hidden');
    yearText.classList.remove('text-lightRed');
    inputYearEl.classList.remove('border-lightRed');
  }

  if (isDayTrue == true && isMonthTrue == true && isYearTrue == true) {
    calculateAge();
  } else {
  }
});
