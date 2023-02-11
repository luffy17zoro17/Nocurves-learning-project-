import {createSlice } from '@reduxjs/toolkit';

const initialState={
    value:0,
}

const autoToggleSlice = createSlice({
    name: 'autoToggle',
    initialState,
  
    reducers: {
      toggleShow:(state) => {
           state.value=1;
      },
      toggleHide:(state)=> {
      {
          state.value=0;
        }
      },
      navToLeft:(state)=>{
     
            state.value=2;    
      },
      navCenter:(state)=>{  
          state.value=3;
      }
      

     


    }  
});

export const selectToggle = (state) => state.autoToggle.value;

export const {toggleShow, toggleHide,
   navToLeft,navCenter} = autoToggleSlice.actions;


export default autoToggleSlice.reducer;
