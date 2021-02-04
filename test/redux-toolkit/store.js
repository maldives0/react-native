const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');

const reducer = require('./reducers');
const firstMiddleware = () => (next) => (action) => {
  console.log('loging', action);
  next(action);
};
const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()],
});
module.exports = store;
