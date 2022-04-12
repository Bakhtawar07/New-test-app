import React, { useState, useMemo } from 'react'
import { View, Text, Button } from 'react-native'

function DummyCounter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

//   const multiCount = () => {
//     console.warn('MULTICOUNT')
//     return counterOne * 3
//   }

  const multiMemo = useMemo(function multiCount() {
      console.warn("MULTICOUNT");

      return counterOne * 3
    }, [counterOne])

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>{multiMemo}</Text>
      <Button title={'counterOne'} onPress={incrementOne} />
      <Text>{counterOne}</Text>

      <Button title={'counterTwo'} onPress={incrementTwo} />
      <Text>{counterTwo}</Text>
    </View>
  )
}

export default React.memo(DummyCounter)
