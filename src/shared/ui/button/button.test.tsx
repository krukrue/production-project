import { describe } from 'node:test'
import { render, screen } from '@testing-library/react'
import { Button } from './button'
import { Theme } from 'app/providers/theme-provider/lib/theme-context'

describe('classNames testing', () => {
  test('test render with child', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test dark theme', () => {
    render(<Button theme={Theme.Dark}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('dark')
    screen.debug()
  })
})
