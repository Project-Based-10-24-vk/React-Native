import { PaperText } from '~/containers'
import { screen1, screen2, screen3 } from '~/assets'

export const onboardingSteps = [
  {
    key: 1,
    image: screen1,
    title: (
      <>
        <PaperText bold>The secret of getting </PaperText>{' '}
        <PaperText bold variant='title'>
          ahead{' '}
        </PaperText>
        <PaperText bold>is getting </PaperText>
        <PaperText bold variant='title'>
          started
        </PaperText>
      </>
    ),
    description: (
      <>
        <PaperText variant='descriptionText'>Welcome to the </PaperText>
        <PaperText variant='combineText'>Space2Study </PaperText>
        <PaperText variant='descriptionText'>learning app!</PaperText>
      </>
    )
  },
  {
    key: 2,
    image: screen2,
    title: (
      <>
        <PaperText bold variant='title'>
          Learn{' '}
        </PaperText>
        <PaperText bold>from experts</PaperText>
      </>
    ),
    description: (
      <PaperText variant='descriptionText'>
        Enjoy personalized lessons and easy communication with the right tutor
        for you.
      </PaperText>
    )
  },
  {
    key: 3,
    image: screen3,
    title: (
      <>
        <PaperText bold variant='title'>
          Share{' '}
        </PaperText>
        <PaperText bold>your experience</PaperText>
      </>
    ),
    description: (
      <PaperText variant='descriptionText'>
        Create your expert content, engage students, and track progress easily.
      </PaperText>
    )
  }
]
