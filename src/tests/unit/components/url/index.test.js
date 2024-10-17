const { render, fireEvent } = require('@testing-library/react-native')
const { Linking } = require('react-native')
const { Url } = require('~/components')

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn()
}))

describe('Url Component', () => {
  const mockUrl = 'https://example.com'
  let getByText

  beforeEach(() => {
    const renderResult = render(<Url url={mockUrl}>Test Link</Url>)
    getByText = renderResult.getByText
  })

  it('renders correctly with children', () => {
    expect(getByText('Test Link')).toBeTruthy()
  })

  it('opens the correct URL when pressed', () => {
    const linkElement = getByText('Test Link')
    fireEvent.press(linkElement)

    expect(Linking.openURL).toHaveBeenCalledWith(mockUrl)
  })
})
