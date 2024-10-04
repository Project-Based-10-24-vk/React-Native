import { DataTable, Text } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu'

import SelectOption from '~/components/select-option'

import { styles } from './MyResourcesTable.styles'
import palette from '~/styles/app-theme/app.pallete'

const Renderer = ({ item, onDelete, onRename }) => {
  const renameIcon = (
    <Text>
      <MaterialIcons
        color={palette.primary}
        name='mode-edit-outline'
        size={24}
      />
    </Text>
  )

  const deleteIcon = (
    <Text>
      <MaterialIcons color={palette.primary} name='delete-outline' size={24} />
    </Text>
  )

  const optionsData = [
    { text: 'Rename', icon: renameIcon, handleSelect: onRename },
    { text: 'Delete', icon: deleteIcon, handleSelect: onDelete }
  ]

  const options = optionsData.map((item) => (
    <SelectOption
      icon={item.icon}
      id={item._id}
      key={item._id}
      onSelect={item.handleSelect}
      text={item.text}
    />
  ))

  return (
    <DataTable.Row key={item._id} style={styles.bg}>
      <DataTable.Cell style={styles.nameCell}>{item.name}</DataTable.Cell>
      <DataTable.Cell>
        <Menu>
          <MenuTrigger
            customStyles={{
              triggerWrapper: {
                top: 0
              }
            }}
          >
            <Entypo color='black' name='dots-three-vertical' size={20} />
          </MenuTrigger>
          <MenuOptions>{options}</MenuOptions>
        </Menu>
      </DataTable.Cell>
    </DataTable.Row>
  )
}

export default Renderer
