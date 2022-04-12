import { incrementByAmount } from '@/Services/Counter/UpdateValues'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

export const incrementedAmount = {
  initialState: buildAsyncState('counterStatus'),
  action: buildAsyncActions('counter/incrementByAmount', incrementByAmount),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'counterStatus.error',
      loadingKey: 'counterStatus.loading',
    }),
    fulfilled: (state, { payload, type }) => {
      if (type === 'counter/incrementByAmount/fulfilled') {
        state.value = Number(state.value) + Number(payload)
      }
    },
  },
}
