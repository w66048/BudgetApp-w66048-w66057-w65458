import React, { useState } from 'react';

export const GoalForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'Pole nazwa jest wymagane';
    if (!amount) newErrors.amount = 'Pole kwota jest wymagane';
    if (description.length > 150) newErrors.description = 'Pole opis może mieć maksymalnie 150 znaków';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const goal = { name, description, amount };
      try {
        const response = await fetch('/api/goals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(goal),
        });
        if (response.ok) {
          onClose(); 
        } else {
          onClose(); 
        }
      } catch (error) {
        alert('Błąd połączenia z serwerem');
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-6">Utwórz Nowy Cel</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nazwa
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Wpisz nazwę"
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Opis
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Wpisz opis (max 150 znaków)"
            maxLength="150"
            rows="5"
          />
          {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Kwota
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Wpisz kwotę"
          />
          {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount}</p>}
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Utwórz</button>
        </div>
      </form>
    </div>
  );
};