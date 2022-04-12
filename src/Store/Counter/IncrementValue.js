import { increment } from '@/Services/Counter/UpdateValues'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

export const incrementValue = {
  initialState: buildAsyncState('counterStatus'),
  action: buildAsyncActions('counter/increment', increment),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'counterStatus.error',
      loadingKey: 'counterStatus.loading',
    }),
    fulfilled: (state, { payload, type }) => {
      console.log("PAYLOAD", payload);

      if (type === 'counter/increment/fulfilled') {
        state.value = payload
      }
    },
  },
}

