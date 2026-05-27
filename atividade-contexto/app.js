const { useState } = React;

const dicionarioOrdenado = [
    "teclado", "mouse", "computador", "monitor", "tela", 
    "digitar", "teclas", "mousepad", "notebook", "usb", 
    "mesa", "cadeira", "trabalho", "escritorio", "tecnologia",
    "hardware", "software", "botao", "cabo", "internet",
    "programacao", "codigo", "sistema", "windows", "mac",
    "linux", "gamer", "jogo", "iluminacao", "rgb"
];

const secretWord = dicionarioOrdenado[0];
const totalPalavras = dicionarioOrdenado.length;

function App() {
    const [inputValue, setInputValue] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [erro, setErro] = useState("");
    const [won, setWon] = useState(false); // Novo estado de vitória

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Bloqueia tentativas se já tiver ganho
        if (won) return;

        const cleanGuess = inputValue.trim().toLowerCase();
        setErro("");

        if (!cleanGuess) return;

        if (guesses.some(g => g.word === cleanGuess)) {
            setErro("Você já tentou essa palavra!");
            setInputValue("");
            return;
        }

        const wordIndex = dicionarioOrdenado.indexOf(cleanGuess);

        if (wordIndex === -1) {
            setErro("Palavra desconhecida. Tente outra!");
            setInputValue("");
            return;
        }

        const rank = wordIndex + 1;

        setGuesses(prev => {
            const updated = [...prev, { word: cleanGuess, rank: rank }];
            return updated.sort((a, b) => a.rank - b.rank);
        });

        // Verifica se a pessoa acertou a palavra (Rank 1)
        if (rank === 1) {
            setWon(true);
        }

        setInputValue("");
    };

    const getPercentage = (rank) => {
        const percent = ((totalPalavras - rank + 1) / totalPalavras) * 100;
        return Math.max(2, percent);
    };

    return (
        <div className="app-container">
            <h1>Contexto Clone</h1>
            <p className="subtitle">Descubra a palavra secreta do dia.</p>
            
            {/* Mensagem de Parabéns aparece aqui */}
            {won && (
                <div className="win-message">
                    <h2>🎉 Parabéns! 🎉</h2>
                    <p>Você encontrou a palavra secreta: <strong>{secretWord.toUpperCase()}</strong></p>
                    <p>Você precisou de {guesses.length} tentativa(s).</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className={won ? "disabled-form" : ""}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Digite uma palavra..."
                    disabled={won} // Desabilita o input se ganhou
                    autoComplete="off"
                />
                <button type="submit" disabled={won}>Tentar</button>
            </form>

            {erro && <p className="error-message">{erro}</p>}

            <div className="guesses">
                {guesses.map((guess) => {
                    const percent = getPercentage(guess.rank);
                    const isWin = guess.rank === 1;
                    
                    return (
                        // Usamos variáveis CSS dinâmicas (style) para controlar a barra de progresso no arquivo CSS
                        <div key={guess.word} className={`guess-item ${isWin ? 'win-item' : 'fade-in'}`} style={{
                            '--fill-percent': `${percent}%`,
                            '--fill-color': isWin ? '#22c55e' : '#6ee7b7'
                        }}>
                            <div className="guess-background"></div>
                            <div className="guess-content">
                                <strong>{guess.word}</strong>
                                <span>{guess.rank}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);