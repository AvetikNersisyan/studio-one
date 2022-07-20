import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/mainLayout'
import AppRoutes from './routes'

function App() {
  return (
    <MainLayout>
      <AppRoutes/>
    </MainLayout>
  );
}

export default App;
