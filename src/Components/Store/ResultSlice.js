import { createSlice } from "@reduxjs/toolkit";

const ResultSlice = createSlice({
    name: "StudentResult",
    initialState: {
        data: [],
        initialValues: {
            FirstName: '',
            LastName: '',
            physics: '',
            chemistry: '',
            biology: '',
            English: '',
            maths: ''
        },
        editID: -1,
    },
    reducers: {
        addData(state, action) {
            state.data.push(action.payload)
            console.log(action.payload);
        },
        deleteData(state, action) {
            state.data.splice(action.payload, 1)
        },
       
        editData(state, action) {
            state.initialValues = action.payload.list
            state.editID = action.payload.id
        },
        updateData(state, action) {
            state.data.splice(state.editID, 1, action.payload)
            state.initialValues = {
                FirstName: '',
                LastName: '',
                physics: '',
                chemistry: '',
                biology: '',
                English: '',
                maths: ''
            }
            state.editID = -1
        },
        clearAllData(state, action){
            state.data = []
        }
    }
})
// console.log(ResultSlice.actions);
export const { addData, deleteData, editData, updateData, clearAllData } = ResultSlice.actions

export default ResultSlice.reducer