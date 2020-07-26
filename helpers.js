import { centuryCodes, monthCodes } from './constants'

export const findCenturyKey = year => {
  let _year = year
  while (true) {
    if (_year > 2099) {
      _year -= 400
      continue
    } else if (_year > 1999 && _year <= 2099) {
      return centuryCodes[2000]
    } else if (_year > 1899 && _year <= 1999) {
      return centuryCodes[1900]
    } else if (_year > 1799 && _year <= 1899) {
      return centuryCodes[1800]
    } else if (_year > 1699 && _year <= 1799) {
      return centuryCodes[1700]
    }
    return null
  }
}

export const isLeapYear = year => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}

export const isValidDay = (day, month, year) => {
  if (typeof day === 'number' && day > -1 && day < 32) {
    return month === 'Feb' && isLeapYear(year)  ? day <= 29 : (day <= monthCodes[month].days)
  }
  return false
}

export const isValidMonth = month => {
  return typeof month === 'string' && monthCodes[month] !== undefined
}

export const isValidYear = year => {
  return typeof year === 'number' && year >= 1900
}

