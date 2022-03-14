import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        email: '',
        password: '',
        id: null,
        name: '',
        mail: '',
        points: null,
        completedExs: null
    },

    reducers: {
        setAccountData: ({state, email, password, id, name, points, completedExs}) => {
            state.email = email
            state.password = password
            state.id = id
            state.name = name
        },
        clearAccountData: (state) => {
            state.email = ''
            state.password = ''
        }
    }
})

export const {setAccountData, clearAccountData } = createSlice.actions

export default accountSlice.reducer