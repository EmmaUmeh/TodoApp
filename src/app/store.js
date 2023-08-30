

// import { createStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers'; // Create your reducers

// const store = createStore(rootReducer); // Pass your root reducer

// export default store;


// In your store setup file (e.g., store.js):
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
