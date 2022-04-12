import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import { decrementValue } from './DecrementValue'
import { incrementedAmount } from './IncrementByAmount'
import { incrementValue } from './IncrementValue'


const sliceInitialState = {
  value: 0,
}

export default buildSlice(
  'counter',
  [incrementValue, decrementValue, incrementedAmount],
  sliceInitialState,
).reducer
