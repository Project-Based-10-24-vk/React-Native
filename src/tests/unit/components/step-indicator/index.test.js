const { render } = require('@testing-library/react-native')
const { StepIndicator } = require('~/components')
const { onboardingSteps } = require('~/constants/onboarding')

describe('StepIndicator', () => {
  it('applies active style to the correct indicator', () => {
    const { getByTestId } = render(<StepIndicator screenIndex={1} />)

    const activeIndicator = getByTestId('step-indicator-active')
    expect(activeIndicator).toBeTruthy()
  })

  it('does not apply active style to non-active indicators', () => {
    const { getAllByTestId } = render(<StepIndicator screenIndex={0} />)

    const inactiveIndicators = getAllByTestId('step-indicator-inactive')
    expect(inactiveIndicators).toHaveLength(onboardingSteps.length - 1)
  })
})
