import { render } from '@testing-library/react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { GradientText } from '~/components'

jest.mock('expo-linear-gradient', () => {
  return {
    LinearGradient: jest.fn(({ colors, children }) => (
      <span color={colors} data-testid='linear-gradient'>
        {children}
      </span>
    ))
  }
})

describe('GradientText', () => {
  let getByText
  const customStyle = { fontSize: 24 }
  const colors = ['#294083', '#54BB7D']

  beforeEach(() => {
    const renderResult = render(
      <GradientText style={customStyle} text='Hello' variant='body' />
    )
    getByText = renderResult.getByText
  })

  it('renders correctly with text', () => {
    expect(getByText('Hello')).toBeTruthy()
  })

  it('applies custom style', () => {
    const textElement = getByText('Hello')

    const styles = textElement.props.style
    const flatStyles = styles.flat()
    const hasCustomStyle = flatStyles.some(
      (style) => style.fontSize === customStyle.fontSize
    )

    expect(hasCustomStyle).toBe(true)
  })

  it('applies colors to LinearGradient', () => {
    expect(LinearGradient).toHaveBeenCalledWith(
      expect.objectContaining({ colors }),
      expect.anything()
    )
  })
})
