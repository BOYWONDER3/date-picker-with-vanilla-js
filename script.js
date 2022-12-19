import { format, getUnixTime, fromUnixTime, addMonths, subMonths } from 'date-fns'
 

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButton = document.querySelector('.prev-month-button')
const nextMonthButton = document.querySelector('.next-month-button')
let currentDate = new Date()


datePickerButton.addEventListener('click', e => {
    datePicker.classList.toggle('show')
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = selectedDate
    setupDatePicker(selectedDate)
})

function setDate(date) {
     datePickerButton.innerText = format(date, 'MMMM do, yyyy')
     datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker() {
    datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
}

    nextMonthButton.addEventListener('click', e => {
        currentDate = addMonths(currentDate, 1)
        setupDatePicker()
    })

    previousMonthButton.addEventListener('click', e => {
        currentDate = subMonths(currentDate, 1)
        setupDatePicker()
    })


setDate(new Date())