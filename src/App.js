import React, { useState } from 'react';

import './App.css';
import data from './data.json';
import Cards from './components/Cards';
import Tabela from './components/Tabela';

const App = () => {
  const [tabelaData, setTabelaData] = useState(data);
  const [itensVencidos, setItensVencidos] = useState([]);
  const [itensVenceHoje, setItensVenceHoje] = useState([]);
  const [itensAvencer, setItensAvencer] = useState([]);
  const [itensEntregues, setItensEntregues] = useState([]);

  const vencidos = [];
  const venceHoje = [];
  const aVencer = [];
  const vencidosTotal = [];
  const entregue = [];
  
  data.forEach((e) => {
    if(e.status === "Vencido"){
      return vencidos.push(e.status), vencidosTotal.push(e.status); 
    } else if(e.status === "A vencer"){
      return aVencer.push(e.status);
    } else if(e.status === "Vence Hoje"){
      return venceHoje.push(e.status), vencidosTotal.push(e.status);
    } else if(e.status === "Entregue"){
      return entregue.push(e.status)
    };
  });

  const onClickHandlerFilterVencidos = () => {
    setItensVencidos([]);

    data.forEach((e) => {
      if(e.status === "Vencido"){
        return itensVencidos.push(e);
      }
    });

    return setTabelaData(itensVencidos);
  }

  const onClickHandlerFilterVenceHoje = () => {
    setItensVenceHoje([]);

    data.forEach((e) => {
      if(e.status === "Vence Hoje"){
        return itensVenceHoje.push(e);
      }
    });

    return setTabelaData(itensVenceHoje);
  }
 
  const onClickHandlerFilterAvencer = () => {
    setItensAvencer([]);

    data.forEach((e) => {
      if(e.status === "A vencer"){
        return itensAvencer.push(e);
      }
    });

    return setTabelaData(itensAvencer);
  }

  const onClickHandlerFilterEntregues = () => {
    setItensEntregues([]);

    data.forEach((e) => {
      if(e.status === "Entregue"){
        return itensEntregues.push(e);
      }
    });

    return setTabelaData(itensEntregues);
  }

  const onClickHandlerLimparFiltro = () => {
    setTabelaData([]);

    return setTabelaData(data);
  }

  const lojas = []

  data.forEach((e) => {
    return lojas.push(e.loja);
  })


  return (
    <div className="App">
      <header className="header">
        <h1 className='header__title'>Luiz, você tem {vencidosTotal.length} atividades vencidas</h1>
      </header>   

      <Cards 
      tabela={tabelaData}
      vencidos={vencidos.length} 
      aVencer={aVencer.length} 
      venceHoje={venceHoje.length} 
      total={tabelaData.length} 
      entregue={entregue.length}
      onClickVencidos={onClickHandlerFilterVencidos}
      onClickVenceHoje={onClickHandlerFilterVenceHoje}
      onClickAvencer={onClickHandlerFilterAvencer}
      onClickEntregues={onClickHandlerFilterEntregues}
      
      />
      
      <Tabela 
      tabela={tabelaData} 
      onClickLimparFiltro={onClickHandlerLimparFiltro}
      lojas={lojas}/>
    </div>
  );
}

export default App;
