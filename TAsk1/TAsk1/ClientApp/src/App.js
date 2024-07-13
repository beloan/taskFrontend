import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import React from 'react';
import './App.css';

const NestedList = ({ depth }) => {
    if (depth <= 0) {
        return <li>Item</li>;
    } else {
        return (
            <ul>
                <li>Item
                    <NestedList depth={depth - 1} />
                </li>
            </ul>
        );
    }
};

function App() {
    return (
        <div className="App">
            <h1>Infinite Nested List</h1>
            <NestedList depth={10} />
        </div>
    );
}

export default App;

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
