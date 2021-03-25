import './App.css';

function App() {
    return (
        <>
            <html>
                <head>
                    <title>
                        Dev.Financ€
                    </title>
                </head>
                <body>
            <h1>Dev-Financ€</h1>

            <h2>Balanço</h2>
            <h3>Entradas</h3>
            <p>5.000,00 €</p>
            
            <h3>Saídas</h3>
            <p>2.000,00 €</p>

            <h3>Total</h3>
            <p>3.000,00 €</p>
            
            <h2>Transações</h2>

            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luz</td>
                        <td>- 500,00 €</td>
                        <td>23/01/2021</td>
                    </tr>
                    <tr>
                        <td>Criação de Website</td>
                        <td>5000,00 €</td>
                        <td>23/01/2021</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td>- 200,00 €</td>
                        <td>23/01/2021</td>
                    </tr>    
                </tbody>
            </table>
                <p>Dev.Financ€</p>
                </body>
            </html>
        </>
    );
}

export default App;
