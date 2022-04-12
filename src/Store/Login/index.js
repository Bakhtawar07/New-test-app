import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import { isUser } from './UserLogin'

const sliceInitialState = {
  userStatus: false,
}

export default buildSlice('userLoginStatus', [isUser], sliceInitialState).reducer
