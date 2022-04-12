import { isUserLogin } from '@/Services/Login/LoginAction'
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper'

export const isUser = {
    initialState: buildAsyncState('loginUser'),
    action: buildAsyncActions('userLoginStatus/isUserLogin', isUserLogin),
    reducers: {
      ...buildAsyncReducers({
        errorKey: 'loginUser.error',
        loadingKey: 'loginUser.loading',
      }),
      fulfilled: (state, { payload, type }) => {
        if (type === 'userLoginStatus/isUserLogin/fulfilled') {
            console.log("PAYLOAD", payload);
          state.value = payload
        }
      },
    },
  }