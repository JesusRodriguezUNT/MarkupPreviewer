// This will be the place where I call all the individual components
/** Change the name of the app before it is complete**/

// try to write everything here and then break it up

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { Provider } from 'react-redux';
import store from './actions/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 id="site-header">Markdown Previewer</h1>
        <Editor />
        <Preview />
      </div>
    </Provider>
  );
}

export default App;
