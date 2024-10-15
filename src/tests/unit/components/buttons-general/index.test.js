import { fireEvent, render } from '@testing-library/react-native'
import ButtonsGeneral from '~/components/buttons-general'
import { router } from 'expo-router'

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn()
  }
}))

describe('ButtonsGeneral', () => {
  let getByText

  beforeEach(() => {
    const renderResult = render(<ButtonsGeneral />)
    getByText = renderResult.getByText
  })

  it('should render the component and the buttons correctly', () => {
    expect(getByText('Get Started')).toBeTruthy()
    expect(getByText('Log in')).toBeTruthy()
  })

  it('should trigger navigation to signup when "Get Started" is pressed', () => {
    const getStartedButton = getByText('Get Started')

    fireEvent.press(getStartedButton)

    expect(router.replace).toHaveBeenCalledWith('public/signup')
  })

  it('should trigger navigation to login when "Log in" is pressed', () => {
    const loginText = getByText('Log in')

    fireEvent.press(loginText)

    expect(router.replace).toHaveBeenCalledWith('public/login')
  })
})
