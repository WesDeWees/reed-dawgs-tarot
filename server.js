import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Tarot deck data
const tarotCards = [
  { id: 1, name: 'The Fool', meaning: 'New beginnings, taking risks' },
  { id: 2, name: 'The Magician', meaning: 'Power, resourcefulness, inspired action' },
  { id: 3, name: 'The High Priestess', meaning: 'The subconscious, intuition, sacred knowledge' },
  { id: 4, name: 'The Empress', meaning: 'Femininity, beauty, abundance, nature' },
  { id: 5, name: 'The Emperor', meaning: 'Authority, control, determination' },
  { id: 6, name: 'The Hierophant', meaning: 'Spirituality, faith, tradition' },
  { id: 7, name: 'The Lovers', meaning: 'Love, harmony, relationships' },
  { id: 8, name: 'The Chariot', meaning: 'Control, willpower, determination, success' },
  { id: 9, name: 'Strength', meaning: 'Inner strength, courage, patience' },
  { id: 10, name: 'The Hermit', meaning: 'Soul searching, introspection, inner guidance' },
];

// API endpoint to get a random card
app.get('/api/card', (req, res) => {
  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  res.json(randomCard);
});

// API endpoint to get all cards
app.get('/api/cards', (req, res) => {
  res.json(tarotCards);
});

app.listen(PORT, () => {
  console.log(`Tarot API server running on http://localhost:${PORT}`);
});
