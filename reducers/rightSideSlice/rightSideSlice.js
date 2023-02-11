



import {createSlice } from '@reduxjs/toolkit';

const initialState={
    value:0,
}

const rightSideSlice = createSlice({
    name: 'rightBar',
    initialState,
    reducers: {
        rightBarSlide:(state)=>{
        
                state.value=4;
            
        },    
     
        slideAway:(state)=>{    
            
                state.value=0;
           
        },
        
           
    }  
});

export const selectRightBar = (state) => state.rightBar.value;

export const {rightBarSlide,slideAway, closeBar} = rightSideSlice.actions;


export default rightSideSlice.reducer;












