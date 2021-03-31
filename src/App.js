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
                    <header>
                        <h1 id="logo">Dev-Financ€</h1>
                    </header>

                    <main className="container">
                        <video autoplay="true" loop>
                            <source src="Finance.mp4" type="video/mp4" />
                        </video>
                        <section id="balance">
                            <h2>Balanço</h2>

                            <div className="card">
                                <h3>Entradas</h3>
                                <p>5.000,00 €</p>
                            </div>

                            <div className="card">
                                <h3>Saídas</h3>
                                <p>2.000,00 €</p>
                            </div>

                            <div className="card">
                                <h3>Total</h3>
                                <p>3.000,00 €</p>
                            </div>
                        </section>

                        <section id="transaction">
                            <h2>Transações</h2>

                            <table id="data-table">
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
                        </section>
                    </main>
                    <footer><p>Dev.Finance €</p></footer>
                </body>
            </html>
        </>
    );
}

export default App;
