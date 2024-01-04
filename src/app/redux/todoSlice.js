const { createSlice,nanoid,  } = require("@reduxjs/toolkit");

const initialState={
    todos:[]
}

const Slice=createSlice({
    name:"Add todo List",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload)
            const data={
                id:nanoid(),
                todo:action.payload
            }
            state.todos.push(data)
        }
    }
})


export const {addTodo}=Slice.actions

export default Slice.reducer;