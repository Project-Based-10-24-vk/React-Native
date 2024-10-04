import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'

import Categories from '~/containers/my-resources/categories'
import Lessons from '~/containers/my-resources/lessons'
import Questions from '~/containers/my-resources/questions'
import Quizzes from '~/containers/my-resources/quizzes'

import { styles } from './MyResources.style'

const MyResources = () => {
  const [index, setIndex] = useState(0)
  const renderScene = SceneMap({
    first: Lessons,
    second: Quizzes,
    third: Questions,
    fourth: Categories
  })

  const routes = [
    { key: 'first', title: 'Lessons', icon: 'file-document-outline' },
    { key: 'second', title: 'Quizzes', icon: 'square-edit-outline' },
    { key: 'third', title: 'Questions', icon: 'file-question-outline' },
    { key: 'fourth', title: 'Categories', icon: 'format-list-bulleted' }
  ]

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor='black'
      inactiveColor='grey'
      indicatorStyle={styles.indicator}
      renderIcon={({ route, color }) => (
        <MaterialCommunityIcons color={color} name={route.icon} size={24} />
      )}
      scrollEnabled
      style={styles.constainer}
      tabStyle={styles.tabStyle}
    />
  )

  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      style={{}}
    />
  )
}

export default MyResources
