import { useCallback, useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, Pressable } from 'react-native'
import { DataTable } from 'react-native-paper'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

import { PaperText } from '~/containers'
import { ResourceCategoriesModal } from '~/components'
import Renderer from './renderer'
import EmptyResource from '../my-resources/empty-resource'

import { styles } from './MyResourcesTable.styles'
import palette from '~/styles/app-theme/app.pallete'

const MyResourcesTable = ({
  dataList = [],
  onDelete,
  fetchData,
  setSkip,
  skip
}) => {
  const [sortAsc, setSortAsc] = useState(true)
  const [items, setItems] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)
  const [isCreateCategorie, setCreateCategorie] = useState(false)
  const refreshing = false
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    if (dataList.items.length > 0) {
      setItems((prev) => {
        const allItems = [...prev, ...dataList.items]
        const unique = allItems.filter(
          (item, index, array) =>
            index === array.findIndex((t) => t._id === item._id)
        )
        return unique
      })
    }
  }, [dataList])

  const onPress = () => {
    setItems((prev) =>
      prev.sort((item1, item2) =>
        sortAsc
          ? item1.name.localeCompare(item2.name)
          : item2.name.localeCompare(item1.name)
      )
    )
    setSortAsc((prev) => !prev)
  }

  const onRename = useCallback((id) => {
    setModalVisible(true)
    setSelectedId(id)
  }, [])

  const onEndReached = () => {
    if (dataList.count > skip * 10) {
      setSkip((prev) => prev + 1)
    }
  }

  const onAddPress = () => {
    setCreateCategorie(true)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    setCreateCategorie(false)
    fetchData()
    setSelectedId('')
  }

  return (
    <>
      <ResourceCategoriesModal
        fetchData={fetchData}
        isCreateCategorie={isCreateCategorie}
        onClose={onCloseModal}
        selectedId={selectedId}
        visible={isModalVisible}
      />
      <DataTable>
        <DataTable.Header style={styles.bg}>
          <DataTable.Title
            onPress={onPress}
            sortDirection={sortAsc ? 'ascending' : 'descending'}
          >
            <PaperText bold>Name</PaperText>
          </DataTable.Title>
        </DataTable.Header>
        <FlatList
          ListEmptyComponent={() => <EmptyResource />}
          ListFooterComponent={() => (
            <TouchableOpacity style={styles.footerComponent}>
              <PaperText>No more data</PaperText>
            </TouchableOpacity>
          )}
          data={items}
          keyExtractor={(item) => item._id}
          onEndReached={onEndReached}
          onEndReachedThreshold={0}
          onRefresh={() => fetchData}
          refreshing={refreshing}
          renderItem={({ item }) => (
            <Renderer item={item} onDelete={onDelete} onRename={onRename} />
          )}
        />
      </DataTable>
      <Pressable onPress={onAddPress} style={styles.addButton}>
        <FontAwesome6 color={palette.secondary} name='add' size={24} />
      </Pressable>
    </>
  )
}

export default MyResourcesTable
