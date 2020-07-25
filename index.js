import { dayCodes, monthCodes } from './constants'
import {
  isLeapYear,
  isValidDay,
  isValidMonth,
  isValidYear,
  findCenturyKey,
} from './helpers'

export const findWeekday = (day, month, year) => {
  // check valid input
  if (!isValidYear(year)
    || !isValidMonth(month)
    || !isValidDay(day, month, year)) {
    return 'Invalid'
  }
  // take last 2 digits of the year, divider by 4 and drop remainder
  const lastTwoDigitsYear = year.toString().substring(2)
  const divideByFour = Math.floor(lastTwoDigitsYear / 4)

  // add the day of month and month's code to value
  let sum = divideByFour + day + monthCodes[month].code

  // subtract 1 if month is in Jan or Feb of a leap year
  if ((month === 'Jan' || month === 'Feb') && isLeapYear(year)) {
    sum -= 1
  }
  
  // find century code
  const yearCode = findCenturyKey(year)

  // add year code and last 2 digits to previos value
  const total = sum + yearCode + (+lastTwoDigitsYear)

  const remainder = total % 7

  return dayCodes[remainder]
}