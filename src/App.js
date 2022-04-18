import './App.css';
import React from "react";
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
    <Header />
    <Skills />
    <Contact />
    </>
  );
}

export default App;

