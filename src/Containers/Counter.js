import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { incrementValue } from '@/Store/Counter/IncrementValue'
import { decrementValue } from '@/Store/Counter/DecrementValue'
import { incrementedAmount } from '@/Store/Counter/IncrementByAmount'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const value = useSelector(state => {
    return state?.counter?.value
  })

  useEffect(() => {
    fetchResults()
  }, [pageNum])

  const fetchResults = pageNum => {
    const url = `https://api.instantwebtools.net/v1/passenger?page=${pageNum}&size=10`

    try {
      axios.get(url).then(response => {
        setLoading(true)
        setIsFetching(false)
        setData([...data, ...response?.data?.data])
        setLoading(false)
      })
    } catch (error) {}
  }

  const renderItem = useCallback(({ item, index }) => {
    return (
      <View key={index} style={{ alignItems: 'center' }}>
        <Text>{index}</Text>
        <Text style={styles.textStyle}>{item?.name}</Text>
        <Text style={styles.textStyle}>{item?.trips}</Text>
      </View>
    )
  }, [])
  const ItemSeparatorView = () => {
    return <View style={styles.separatorStyle} />
  }

  const renderLoader = () => {
    return loading ? (
      <View style={styles.loaderView}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loaderStyle}
        />
      </View>
    ) : null
  }

  function onRefresh() {
    setIsFetching(true)
    setPageNum(1)
    setData([])
  }

  const loadMoreItems = () => {
    setPageNum(pageNum + 1)
  }
  return (
    <View style={{ flex: 1, marginBottom: 50 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            dispatch(incrementValue.action(value))
          }}
        >
          <Text style={styles.buttonStyle}>+</Text>
        </TouchableOpacity>
        <Text style={styles.valueStyle}>{value}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(decrementValue.action(value))
          }}
        >
          <Text style={styles.buttonStyle}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={setAmount}
          value={amount}
        />
        <Button
          title="Add Amount"
          onPress={() => {
            dispatch(incrementedAmount.action(amount))
            setAmount(0)
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0}
        onEndReached={loadMoreItems}
        ItemSeparatorComponent={ItemSeparatorView}
        ListFooterComponent={renderLoader}
        onRefresh={onRefresh}
        refreshing={isFetching}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  valueStyle: {
    fontSize: 20,
    color: 'black',
  },
  buttonStyle: {
    color: '#37BBCE',
    fontSize: 20,
    marginEnd: 20,
    marginStart: 20,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    marginLeft: 70,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  separatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
    marginBottom: 70,
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    margin: 20,
  },
})
