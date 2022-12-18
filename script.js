import { format, getUnixTime, fromUnixTime } from 'date-fns'


const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')


datePickerButton.addEventListener('click', e => {
    datePicker.classList.toggle('show')
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    setupDatePicker(selectedDate)
})

function setDate(date) {
     datePickerButton.innerText = format(date, 'MMMM do, yyyy')
     datePickerButton.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate) {
    datePickerHeaderText.innerText = format(selectedDate, 'MMMM - yyyy')
    setupMonthButtons(selectedDate)
}

setDate(new Date())