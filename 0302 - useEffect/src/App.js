import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button
        onClick={handleClick}
        style={{
          marginRight: '1rem',
          padding: '1rem',
          fontSize: '1rem',
          color: 'white',
          backgroundColor: 'lightcoral',
          borderStyle: 'none',
          borderRadius: '5px',
          marginBottom: '1rem',
        }}
      >
        notebook
      </button>
      <button
        onClick={handleClick}
        style={{
          padding: '1rem',
          fontSize: '1rem',
          color: 'white',
          backgroundColor: 'lightcoral',
          borderStyle: 'none',
          borderRadius: '5px',
          marginBottom: '1rem',
        }}
      >
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
