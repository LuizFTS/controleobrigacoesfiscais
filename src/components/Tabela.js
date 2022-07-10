import './Tabela.css';

const Tabela = props => {

    const itens = []
    
    props.tabela.forEach((e) => {
            return itens.push(
                <tbody className='tabela-td'>
                    <td>{e.tipo}</td>
                    <td>{e.uf}</td>
                    <td>{e.loja}</td>
                    <td>{e.vencimento}</td>
                    <td>{e.entrega}</td>
                    <td>{e.recibo}</td>
                    <td>{e.status}</td>
                </tbody>
            )
        })

    return (
        <div className='tabela'>
            <h2 className='filterTitle'>Filtro:</h2>
            <div onClick={props.onClickLimparFiltro} className='card limpar-filtro'>
                <span className='card__title'>Limpar Filtro</span><br/>
            </div>
            <table className='tabela-table'>
            <tbody className='tabela-tr'>
                <th>Tipo</th>
                <th>UF</th>
                <th>Loja</th>
                <th>Vencimento</th>
                <th>Entrega</th>
                <th>Chamado/Recibo</th>
                <th>Status</th>
            </tbody>
            {itens}
            </table>
        </div>
    );
};

export default Tabela;