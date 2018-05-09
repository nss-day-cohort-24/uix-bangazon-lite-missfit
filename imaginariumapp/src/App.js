import React, { Component } from 'react';
import PageHeader from './components/header/header';
import Jumbotron from './components/homePage/jumbotron';
import ProductsPreview from './components/homePage/productPreview';
import SignInModal from './components/modals/signInRegister';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <Jumbotron />
        <ProductsPreview />
        <SignInModal />
      </div>
    );
  }
}

export default App;
