import { View, FlatList } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import { roles } from '~/constants/sign-up'
import { SquareCard, HeaderWithBackArrow } from '~/components'

import { PaperText } from '~/containers'

import { styles } from './MainConetent.styles'

const MainContent = ({ nextStep, chooseRole, role }) => {
  const { t } = useTranslation()

  const onHandlePress = () => {
    nextStep(true)
  }

  const Separator = () => {
    return <View style={styles.separator} />
  }

  const renderer = (item) => (
    <SquareCard chooseRole={chooseRole} choosenRole={role} data={item} />
  )

  return (
    <>
      <HeaderWithBackArrow route='/' text='Sign up' />
      <View style={styles.mainContaner}>
        <View>
          <PaperText bold style={styles.title} variant='headlineMedium'>
            Introduce{' '}
            <PaperText bold style={styles.titleMain} variant='headlineMedium'>
              yourself
            </PaperText>
          </PaperText>
          <PaperText style={styles.subtitle} variant='titleSmall'>
            {t('signup.description')}
          </PaperText>
        </View>
        <View style={styles.InputContainer}>
          <PaperText variant='titleSmall'>
            {t('signup.enterYourName')}
          </PaperText>
          <TextInput
            label={t('signup.name')}
            mode='outlined'
            theme={styles.inputTheme}
          />
          <TextInput
            label={t('signup.lastName')}
            mode='outlined'
            style={styles.bottomInput}
            theme={styles.inputTheme}
          />
        </View>
        <View>
          <PaperText variant='titleSmall'>{t('signup.chooseRole')}</PaperText>
          <FlatList
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.rolesContainer}
            data={roles}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={renderer}
          />
        </View>
      </View>
      <Button
        contentStyle={styles.buttonContent}
        icon={() => (
          <AntDesign
            color='#fff'
            name='arrowright'
            size={20}
            style={styles.buttonIcon}
          />
        )}
        mode='contained'
        onPress={onHandlePress}
        style={styles.button}
      >
        <PaperText style={styles.buttonText}>{t('signup.next')}</PaperText>
      </Button>
    </>
  )
}

export default MainContent
