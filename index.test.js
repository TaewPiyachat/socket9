import { findWeekday } from './index'

test('1 Jan 1900 is Monday', () => {
  expect(findWeekday(1, 'Jan', 1900)).toBe('Monday');
});

test('28 Feb 1900 is Wednesday', () => {
  expect(findWeekday(28, 'Feb', 1900)).toBe('Wednesday');
});

test('1 Mar 1900 is Thursday', () => {
  expect(findWeekday(1, 'Mar', 1900)).toBe('Thursday');
});

test('30 Dec 1900 is Sunday', () => {
  expect(findWeekday(30, 'Dec', 1900)).toBe('Sunday');
});

test('7 Jul 1950 is Friday', () => {
  expect(findWeekday(7, 'Jul', 1950)).toBe('Friday');
});

test('27 Sep 1977 is Tuesday', () => {
  expect(findWeekday(27, 'Sep', 1977)).toBe('Tuesday');
});

test('12 Nov 1999 is Friday', () => {
  expect(findWeekday(12, 'Nov', 1999)).toBe('Friday');
});

/* ---------------------------------------------------- */

test('9 Aug 2008 is Saturday', () => {
  expect(findWeekday(9, 'Aug', 2008)).toBe('Saturday');
});

test('29 Feb 2020 is Saturday', () => {
  expect(findWeekday(29, 'Feb', 2020)).toBe('Saturday');
});

test('5 May 2100 is Wednesday', () => {
  expect(findWeekday(5, 'May', 2100)).toBe('Wednesday');
});

test('13 Oct 2299 is Friday', () => {
  expect(findWeekday(13, 'Oct', 2299)).toBe('Friday');
});

test('22 Mar 2321 is Tuesday', () => {
  expect(findWeekday(22, 'Mar', 2321)).toBe('Tuesday');
});

test('28 Feb 2555 is Friday', () => {
  expect(findWeekday(28, 'Feb', 2555)).toBe('Friday');
});

test('3 Apr 2699 is Monday', () => {
  expect(findWeekday(3, 'Apr', 2699)).toBe('Monday');
});

test('8 Aug 2708 is Saturday', () => {
  expect(findWeekday(8, 'Aug', 2708)).toBe('Saturday');
});

test('31 Jan 2999 is Thursday', () => {
  expect(findWeekday(31, 'Jan', 2999)).toBe('Thursday');
});

test('1 Dec 3000 is Monday', () => {
  expect(findWeekday(1, 'Dec', 3000)).toBe('Monday');
});

/* ---------------------------------------------------- */

test('29 Feb 1900 is invalid', () => {
  expect(findWeekday(29, 'Feb', 1900)).toBe('Invalid');
});

test('29 Feb 2019 is invalid', () => {
  expect(findWeekday(29, 'Feb', 2019)).toBe('Invalid');
});

test('30 Feb 2020 is invalid', () => {
  expect(findWeekday(30, 'Feb', 2020)).toBe('Invalid');
});

test('31 Apr 2009 is invalid', () => {
  expect(findWeekday(31, 'Apr', 2009)).toBe('Invalid');
});

test('-1 Apr 2009 is invalid', () => {
  expect(findWeekday(-1, 'Apr', 2009)).toBe('Invalid');
});

test('1 AAAAA 2020 is invalid', () => {
  expect(findWeekday(1, 'AAAAA', 2020)).toBe('Invalid');
});

test('1 Apr -1000 is invalid', () => {
  expect(findWeekday(1, 'Apr', -1000)).toBe('Invalid');
});

test('Day is string', () => {
  expect(findWeekday('29', 'Feb', 2001)).toBe('Invalid');
});

test('Month is integer', () => {
  expect(findWeekday('29', 1, 1991)).toBe('Invalid');
});

test('Year is string', () => {
  expect(findWeekday('29', 1, 'year')).toBe('Invalid');
});

test('Invalid input', () => {
  expect(findWeekday(null, null, null)).toBe('Invalid');
});