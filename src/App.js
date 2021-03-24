import React from 'react';
import Produto from './Produto';

export const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== 'null') window.localStorage.setItem('produto', produto);
  }, [produto]);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};
