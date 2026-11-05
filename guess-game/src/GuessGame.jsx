import React, { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

function GuessGame() {
    // 1. Slaptą skaičių sugeneruojame per useState pradinės reikšmės funkciją
    const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guessInput, setGuessInput] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isWon, setIsWon] = useState(false);

    const handleGuess = (e) => {
        e.preventDefault();

        const trimmed = guessInput.trim();
        const num = Number(trimmed);

        // 3. Tikriname netinkamą įvestį (tuščia, neskaitinė, trupmeninė, už [1, 100] ribų)
        if (trimmed === '' || isNaN(num) || !Number.isInteger(num) || num < 1 || num > 100) {
            setMessage('Įveskite galiojantį sveikąjį skaičių nuo 1 iki 100!');
            setIsError(true);
            return;
        }

        // Tinkamas spėjimas — skaičiuojame bandymą
        const nextAttempts = attempts + 1;
        setAttempts(nextAttempts);
        setIsError(false);

        // 5. Tikriname spėjimą
        if (num > secretNumber) {
            setMessage('Bandyk mažesnį');
        } else if (num < secretNumber) {
            setMessage('Bandyk didesnį');
        } else {
            setMessage(`Teisingai! Atspėjote per ${nextAttempts} bandymų.`);
            setIsWon(true);
        }

        setGuessInput('');
    };

    return (
        <div style={{
            maxWidth: '500px',
            margin: '40px auto',
            padding: '24px',
            backgroundColor: '#f7fafc',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            fontFamily: 'sans-serif'
        }}>
            <h2 style={{ color: '#2d3748', textAlign: 'center', marginBottom: '20px' }}>
                C dalis: Skaičių spėjimo žaidimas
            </h2>

            <p style={{ textAlign: 'center', color: '#4a5568', fontWeight: '500' }}>
                Bandymų skaičius: <strong>{attempts}</strong>
            </p>

            <GuessForm
                value={guessInput}
                onChange={setGuessInput}
                onSubmit={handleGuess}
                disabled={isWon}
            />

            <Message message={message} isError={isError} isWin={isWon} />

            {isWon && (
                <p style={{ textAlign: 'center', color: '#718096', fontSize: '13px' }}>
                    Noredami žaisti iš naujo, perkraukite puslapį.
                </p>
            )}
        </div>
    );
}

export default GuessGame;
