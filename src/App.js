import './App.css';
import HeroSection from './VideoSection';


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
                    <HeroSection/>
                        <h1 id="logo"></h1>                    
                    </header>
                    
                    <main className="container">
                        
                    <section>
                        <section id="balance">
                            
                            <h2>Dev-Financ€ (BALANÇO)</h2>

                            <div className="card">
                                <h3>Entradas</h3>
                                <p>5.000,00 €</p>
                            </div>

                            <div className="card">
                                <h3>Saídas</h3>
                                <p>2.000,00 €</p>
                            </div>

                            <div className="card total">
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
                                        <td className="desciption">Luz</td>
                                        <td className="expense">- 500,00 €</td>
                                        <td className="date">23/01/2021</td>
                                    </tr>
                                    <tr>
                                        <td className="desciption">Criação de Website</td>
                                        <td className="income">5000,00 €</td>
                                        <td className="date">23/01/2021</td>
                                    </tr>
                                    <tr>
                                        <td className="desciption">Internet</td>
                                        <td className="expense">- 200,00 €</td>
                                        <td className="date">23/01/2021</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>   
                    </main>
                    <footer><p>Dev.Finance €</p></footer>
                </body>
            </html>
        </>
    );
}

export default App;
