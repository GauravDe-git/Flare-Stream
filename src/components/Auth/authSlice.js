import { createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const initialState = {
  authUser: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      state.isLoggedIn = action.payload ? true : false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig,authSlice.reducer);

export const { setAuthUser } = authSlice.actions;

export const listenAuthState = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setAuthUser(user));
    } else {
      dispatch(setAuthUser(null));
    }
  });
};


export const signOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(setAuthUser(null));
    
    const logoutAlert = setTimeout(() => {
        alert("You have logged out!")
        
    }, 500);
  } catch (error) {
    console.log(error.message);
  }
};

export default authSlice.reducer;
