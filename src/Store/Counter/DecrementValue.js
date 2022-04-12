import { decrement } from '@/Services/Counter/UpdateValues'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

export const decrementValue = {
    initialState: buildAsyncState('counterStatus'),
    action: buildAsyncActions('counter/decrement', decrement),
    reducers: {
      ...buildAsyncReducers({
        errorKey: 'counterStatus.error',
        loadingKey: 'counterStatus.loading',
      }),
      fulfilled: (state, { payload, type }) => {
        if (type === 'counter/decrement/fulfilled') {
          state.value = payload
        }
      },
    },
  }
