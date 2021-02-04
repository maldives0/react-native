const {
  useAsObservableSource,
  autorun,
  reaction,
  observable,
  action,
  runInAction,
  computed,
} = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});
autorun(() => {
  console.log('1', state.compA);
  console.log('2', state.compC);
});
reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log('3', state.compB);
  },
);
runInAction(() => {
  state.compA = 'c';
  state.compB = 25;
  state.compC = 'c';
});
runInAction(() => {
  state.compC = 'd';
});
const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
  get postLength() {
    return this.data.length;
  },
});
const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(
      action(() => {
        this.data = data;
        this.isLoggingIn = false;
        postStore.data.push(1);
      }),
      2000,
    );
  },
  logOut() {
    this.data = null;
  },
});
export { userStore, postStore };
