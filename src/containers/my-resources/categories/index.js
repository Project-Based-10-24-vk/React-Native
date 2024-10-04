import { useCallback, useEffect, useState, useMemo } from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import MyResourcesTable from '~/containers/my-resources-table'
import { ResourceService } from '~/services/resource-service'
import useAxios from '~/hooks/use-axios'
import { SortEnum, rowsPerPage } from '~/constants/common'

import palette from '~/styles/app-theme/app.pallete'
import { styles } from './Categories.styles'

const Categories = () => {
  const [data, setData] = useState({ items: [] })
  const [skip, setSkip] = useState(1)
  const [resourceDelete, setResourceDelete] = useState(false)

  const sort = useMemo(
    () => ({ order: SortEnum.Ascending, orderBy: 'updatedAt' }),
    []
  )

  useEffect(() => {
    fetchData()
  }, [skip, fetchData])

  const getCategories = useCallback(
    () =>
      ResourceService.getResourceCategories({
        limit: rowsPerPage,
        sort,
        skip: (skip - 1) * rowsPerPage,
        name: ''
      }),
    [sort, skip]
  )

  const onError = (e) => {
    console.error(e)
  }

  const { response, loading, fetchData } = useAxios({
    service: getCategories,
    fetchOnMount: false,
    onResponseError: onError
  })

  useEffect(() => {
    if (response && resourceDelete) {
      setData(() => ({
        items: [...response.items],
        count: response.count
      }))
      setSkip(1)
      setResourceDelete(false)
    } else if (response && Array.isArray(response.items)) {
      setData((prevData) => ({
        items: [...prevData.items, ...response.items],
        count: response.count
      }))
    }
  }, [response, resourceDelete])

  const deleteCategory = useCallback(
    (id) => ResourceService.deleteResourceCategory(id ?? ''),
    []
  )

  const onDelete = async (id) => {
    await deleteCategory(id)
    fetchData()
    setResourceDelete(true)
  }

  const props = {
    onDelete: onDelete,
    fetchData: fetchData,
    setSkip: setSkip,
    skip: skip
  }

  const content = loading ? (
    <ActivityIndicator
      animating
      color={palette.primary}
      size='large'
      style={styles.loading}
    />
  ) : (
    <MyResourcesTable dataList={data} {...props} />
  )

  return <View>{content}</View>
}

export default Categories
