import { Text } from 'react-native-paper'
import { MenuOption } from 'react-native-popup-menu'

const SelectOption = ({ icon, text, onSelect, id }) => {
  return (
    <MenuOption
      customStyles={{
        optionWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          height: 55
        }
      }}
      onSelect={() => onSelect(id)}
    >
      {icon}
      <Text>{text}</Text>
    </MenuOption>
  )
}

export default SelectOption
