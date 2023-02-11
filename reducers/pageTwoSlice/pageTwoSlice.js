







import {createSlice } from '@reduxjs/toolkit';

const initialState={
    value:0,
}

const pageTwoSlice = createSlice({
    name: 'pageTwoSlide',
    initialState,
    reducers: {
        showBothText:(state)=>{
        
            state.value=7;
            
        },    
        leaveBothText:(state)=>{
        
            state.value=8;
        
        },  
               
    }  
});

export const selectPageTwoSlide = (state) => state.pageTwoSlide.value;

export const {showBothText, leaveBothText} = pageTwoSlice.actions;


export default pageTwoSlice.reducer;












