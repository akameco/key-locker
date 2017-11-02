// @flow
const KeyLocker = require('.')

jest.useFakeTimers()

let locker

beforeEach(() => {
  locker = new KeyLocker()
})

test('call clear after 1 second', () => {
  locker.add('test')
  expect(locker.has('test')).toBe(true)
  jest.runTimersToTime(1000)
  expect(locker.has('test')).toBe(false)
})

test('call clearTimeout when add double', () => {
  locker.add('test')
  expect(locker.has('test')).toBe(true)
  locker.add('test')
  expect(clearTimeout).toHaveBeenCalled()
})

test('works delete', () => {
  locker.add('delete')
  expect(locker.has('delete')).toBe(true)
  locker.delete('delete')
  expect(locker.has('delete')).toBe(false)
})

test('only one time called clerTimeout when called delete 2 times', () => {
  locker.add('delete')
  locker.delete('delete')
  locker.delete('delete')
  expect(clearTimeout).toHaveBeenCalledTimes(1)
})
