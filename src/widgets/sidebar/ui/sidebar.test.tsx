import { describe } from 'node:test'
import { fireEvent, screen } from '@testing-library/react'
import SideBar from './sidebar'
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation/render-with-translation'

describe('Sidebar testing', () => {
  test('test sidebar render', () => {
    renderWithTranslation(<SideBar></SideBar>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test collapsed', () => {
    renderWithTranslation(<SideBar></SideBar>)
    const toggleButton = screen.getByTestId('ToggleButton')
    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
