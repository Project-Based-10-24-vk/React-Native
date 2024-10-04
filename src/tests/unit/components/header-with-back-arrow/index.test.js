import { render, fireEvent } from '@testing-library/react-native'

import HeaderWithBackArrow from '~/components/header-with-back-arrow'

describe('HeaderWithBackArrow', () => {
  const mockRoute = '/'
  const mockText = 'Test Title'
  const mockPress = jest.fn()

  it('should render title', () => {
    const { getByText } = render(
      <HeaderWithBackArrow route={mockRoute} text={mockText} />
    )
    const title = getByText(mockText).props.children

    expect(title).toBe(mockText)
  })

  it('should render title', () => {
    const { getByTestId } = render(
      <HeaderWithBackArrow onPress={mockPress} text={mockText} />
    )
    const button = getByTestId('Pressable')

    fireEvent.press(button)

    expect(mockPress).toHaveBeenCalled()
  })
})
