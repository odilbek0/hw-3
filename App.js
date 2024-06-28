import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
