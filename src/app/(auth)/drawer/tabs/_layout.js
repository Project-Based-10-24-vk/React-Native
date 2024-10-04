import React from 'react'
import { router, Tabs } from 'expo-router'
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'

import palette from '~/styles/app-theme/app.pallete'
import { DrawerToggleButton } from '@react-navigation/drawer'

export default function _layout() {
  const style = { marginRight: 10 }
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        headerRight: () => (
          <MaterialIcons
            color={palette.surfaceVariant}
            name='account-circle'
            onPress={() => router.push('drawer/tabs/profile')}
            size={25}
            style={style}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 10
        },
        tabBarStyle: {
          height: 70
        }
      }}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Home',
          tabBarIcon: () => (
            <Octicons color={palette.surfaceVariant} name='home' size={25} />
          )
        }}
      />
      <Tabs.Screen
        name='search-offers/index'
        options={{
          tabBarLabel: 'Search',
          headerTitle: 'Search',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              color={palette.surfaceVariant}
              name='card-search-outline'
              size={25}
            />
          )
        }}
      />
      <Tabs.Screen
        name='chat/index'
        options={{
          tabBarLabel: 'Chat',
          headerTitle: 'Chat',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              color={palette.surfaceVariant}
              name='chat-processing-outline'
              size={25}
            />
          )
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          headerTitle: 'Profile'
        }}
      />
      <Tabs.Screen
        name='my-resources/index'
        options={{
          headerTitle: 'My Resources'
        }}
      />
    </Tabs>
  )
}
