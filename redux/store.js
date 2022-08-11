import { configureStore } from "@reduxjs/toolkit"
import { user, guardian, selectStudent } from './reducers'

export const store = configureStore(
    {
        reducer: {
            user
        }
    }
)