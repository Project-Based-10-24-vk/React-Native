import { Stack } from 'expo-router'
import { View } from 'react-native'
import { PaperText } from '~/containers'

const Chat = () => {
  return (
    <View>
      <Stack screenOptions={{ header: 'Chat' }} />
      <PaperText>Chat</PaperText>
    </View>
  )
}

export default Chat
