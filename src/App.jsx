import { useState } from 'react'
import './App.css'

function App() {
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(false)

  const drawCard = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/card')
      const data = await response.json()
      setCard(data)
    } catch (error) {
      console.error('Error fetching card:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>🔮 Reed Dawgs Tarot 🔮</h1>
      
      <div className="card-display">
        {card ? (
          <div className="card">
            <h2>{card.name}</h2>
            <p>{card.meaning}</p>
          </div>
        ) : (
          <div className="card placeholder">
            <p>Click below to draw a card</p>
          </div>
        )}
      </div>

      <button onClick={drawCard} disabled={loading} className="draw-button">
        {loading ? 'Drawing...' : 'Draw a Card'}
      </button>
    </div>
  )
}

export default App
