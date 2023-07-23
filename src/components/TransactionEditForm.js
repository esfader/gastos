import React, { useState } from 'react';

const TransactionEditForm = ({ transaction, onEditTransaction, onCancelEdit }) => {
  const [editedTransaction, setEditedTransaction] = useState(transaction);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    if (!editedTransaction.description || !editedTransaction.amount || isNaN(parseFloat(editedTransaction.amount)) || !editedTransaction.personName) {
      // Mostrar un mensaje de error o realizar la validación que desees aquí
      return;
    }

    onEditTransaction(transaction.id, editedTransaction);
    onCancelEdit();
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-lg mx-auto p-4 mt-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">Editar Transacción</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium text-white mb-1">
            Descripción
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Descripción"
            value={editedTransaction.description}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-medium text-white mb-1">
            Monto
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Monto"
            value={editedTransaction.amount}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-white mb-1">
            Categoría
          </label>
          <select
            name="category"
            id="category"
            value={editedTransaction.category}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 text-black"
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
          <label htmlFor="personName" className="text-sm font-medium text-white mb-1">
            Nombre de la Persona
          </label>
          <input
            type="text"
            name="personName"
            id="personName"
            placeholder="Nombre de la persona"
            value={editedTransaction.personName}
            onChange={handleChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-3 text-black"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-md py-3 px-4 transition duration-300 mr-2"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={onCancelEdit}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-3 px-4 transition duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionEditForm;
