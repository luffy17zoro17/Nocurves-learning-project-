import autoToggleReducer from '@/reducers/autoToggleSlice/autoToggleSlice';
import rightSideReducer from '@/reducers/rightSideSlice/rightSideSlice';
import { configureStore } from '@reduxjs/toolkit';
import pageTwoReducer from '@/reducers/pageTwoSlice/pageTwoSlice';

export const store = configureStore({
  reducer: {
    autoToggle: autoToggleReducer,
    rightBar:rightSideReducer,
    pageTwoSlide:pageTwoReducer,
  },
});
