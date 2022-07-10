import "./Cards.css";

const Cards = (props) => {

    return (
        <div>      
          <div onClick={props.onClickVencidos} className='card'>
            <span className='card__value'>{props.vencidos}</span><br/>
            <span className='card__title'>Vencidos</span>
          </div>
          <div onClick={props.onClickVenceHoje} className='card'>
            <span className='card__value'>{props.venceHoje}</span><br/>
            <span className='card__title'>Vence Hoje</span>
          </div>
          <div onClick={props.onClickAvencer} className='card'>
            <span className='card__value'>{props.aVencer}</span><br/>
            <span className='card__title'>A Vencer</span>
          </div>
          <div onClick={props.onClickEntregues} className='card'>
            <span className='card__value'>{props.entregue}</span><br/>
            <span className='card__title'>Entregues</span>
          </div>
          
        </div>
    );
};

export default Cards;
