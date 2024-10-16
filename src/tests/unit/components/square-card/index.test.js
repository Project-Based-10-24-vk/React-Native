import { fireEvent, render } from '@testing-library/react-native'
import { SquareCard } from '~/components'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}))

describe('SquareCard', () => {
  const mockChooseRole = jest.fn()
  const mockData = {
    item: {
      title: 'testTitle',
      image: { uri: 'https://example.com/image.png' },
      role: 'testRole'
    }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with given data', () => {
    const { getByTestId, getByText } = render(
      <SquareCard chooseRole={mockChooseRole} choosenRole='' data={mockData} />
    )

    const image = getByTestId('square-card-image')

    expect(getByText('signup.testTitle')).toBeTruthy()
    expect(image.props.source).toEqual(mockData.item.image)
  })

  it('calls chooseRole function on press', () => {
    const { getByTestId } = render(
      <SquareCard chooseRole={mockChooseRole} choosenRole='' data={mockData} />
    )

    fireEvent.press(getByTestId('square-card-btn'))

    expect(mockChooseRole).toHaveBeenCalledWith(mockData.item.role)
  })

  it('applies correct style based on chosen role', () => {
    const { getByTestId } = render(
      <SquareCard
        chooseRole={mockChooseRole}
        choosenRole={mockData.item.role}
        data={mockData}
      />
    )

    const roleBox = getByTestId('square-card-btn')
    const backgroundColor = roleBox.props.style.backgroundColor

    expect(backgroundColor).toBe('#ECEFF1')
  })
})
