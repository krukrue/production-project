import { describe, test, expect } from '@jest/globals'
import { classNames } from './class-names'

describe('classNames testing', () => {
  test('widthOnlyFirstParam', () => {
    expect(classNames('a')).toBe('a')
  })

  test('with additional class', () => {
    expect(classNames('a', { b: false, a: true, c: true })).toBe('a a c')
  })

  test('with empty second class', () => {
    expect(classNames('asd', {}, ['1', '2', '3', '4'])).toBe('asd 1 2 3 4')
  })

  test('all three classes used', () => {
    expect(classNames('a', { b: (1 + 1 === 2) }, ['c'])).toBe('a b c')
  })
})
