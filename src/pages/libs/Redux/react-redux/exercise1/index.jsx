import { Provider } from 'react-redux';
import App from './stores/App';
import store from './stores/Store';

const Bai1Redux = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Bai1Redux;
