import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction, onUpdateTransaction, editingTransaction }) => {
  const initialState = {
    description: editingTransaction ? editingTransaction.description : '',
    amount: editingTransaction ? editingTransaction.amount : '',
    category: editingTransaction ? editingTransaction.category : '',
    personName: editingTransaction ? editingTransaction.personName : '',
  };

  const [transaction, setTransaction] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!transaction.description || !transaction.amount || isNaN(parseFloat(transaction.amount)) || !transaction.personName) {
      // Manejar el error de validación, mostrar un mensaje de error, etc.
      return;
    }

    if (editingTransaction) {
      onUpdateTransaction({ ...editingTransaction, ...transaction });
    } else {
      onAddTransaction(transaction);
    }

    // Limpiar el formulario después de agregar o editar la transacción
    setTransaction(initialState);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto p-8 mt-8 md:mt-16 md:w-3/4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Agregar Transacción</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descripción"
            value={transaction.description}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 p-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-medium text-gray-700 mb-1">
            Monto
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Monto"
            value={transaction.amount}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 p-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <select
            name="category"
            id="category"
            value={transaction.category}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3"
          >
            <option value="">Selecciona una categoría</option>
            <option value="comida">Comida</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="compras">Compras</option>
            <option value="salud">Salud</option>
            <option value="educacion">Educación</option>
            <option value="viajes">Viajes</option>
            <option value="hogar">Hogar</option>
            <option value="tecnologia">Tecnología</option>
            <option value="deportes">Deportes</option>
            {/* Agregar más opciones de categoría */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="personName" className="text-sm font-medium text-gray-700 mb-1">
            Nombre de la Persona
          </label>
          <input
            type="text"
            name="personName"
            id="personName"
            placeholder="Nombre de la persona"
            value={transaction.personName}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 p-3"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-700 text-white font-semibold rounded-md py-3 transition duration-300"
          >
            Agregar Transacción
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
