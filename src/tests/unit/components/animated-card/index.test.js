const { render } = require('@testing-library/react-native')
const { AnimatedCard } = require('~/components')

describe('AnimatedCard', () => {
  const mockData = {
    image: { uri: 'https://example.com/image.jpg' },
    title: 'Test Title',
    description: 'Test Description'
  }

  it('renders the image correctly', () => {
    const { getByTestId } = render(<AnimatedCard data={mockData} />)

    const image = getByTestId('animated-card-image')
    expect(image.props.source).toEqual(mockData.image)
  })

  it('renders the title and description correctly', () => {
    const { getByText } = render(<AnimatedCard data={mockData} />)

    expect(getByText('Test Title')).toBeTruthy()
    expect(getByText('Test Description')).toBeTruthy()
  })
})
