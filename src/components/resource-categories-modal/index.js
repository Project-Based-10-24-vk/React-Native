import { useCallback } from 'react'
import { useState } from 'react'
import { Modal, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { PaperText } from '~/containers'
import useAxios from '~/hooks/use-axios'
import { ResourceService } from '~/services/resource-service'

import { styles } from './ResourceCategoriesModal.styles'
import palette from '~/styles/app-theme/app.pallete'

const ResourceCategoriesModal = ({
  visible,
  selectedId,
  isCreateCategorie,
  onClose,
  fetchData
}) => {
  const [name, setName] = useState('')
  const title = (isCreateCategorie && 'New') || 'Rename'
  const buttonTitle = isCreateCategorie ? 'Create' : 'Rename'

  const updateCategory = useCallback(
    (params) => ResourceService.updateResourceCategory(params),
    []
  )

  const { fetchData: updateData } = useAxios({
    service: updateCategory,
    defaultResponse: null,
    fetchOnMount: false
  })

  const onSaveCategory = useCallback((params) => {
    ResourceService.createResourceCategory(params)
  }, [])

  const { fetchData: handleCreateCategory } = useAxios({
    service: onSaveCategory,
    defaultResponse: null,
    fetchOnMount: false,
    onResponse: fetchData
  })

  const onSaveButtonPressed = async () => {
    if (isCreateCategorie) {
      handleCreateCategory({ name: name })
    } else {
      if (name) await updateData({ id: selectedId, name })
    }

    setName('')
    onClose()
  }

  return (
    <Modal
      contentContainerStyle={styles.containerStyle}
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View style={styles.containerStyle}>
        <View style={styles.modalView}>
          <PaperText bold variant='headlineMedium'>
            {title} category
          </PaperText>
          <TextInput
            autoFocus
            keyboardType='text'
            label='Name'
            mode='outlined'
            onChangeText={(text) => setName(text)}
            style={styles.textInput}
            theme={styles.inputTheme}
            value={name}
          />
          <View style={styles.buttonContainer}>
            <Button onPress={onClose} textColor={palette.primary}>
              Cancel
            </Button>
            <Button onPress={onSaveButtonPressed} textColor={palette.primary}>
              {buttonTitle}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ResourceCategoriesModal
