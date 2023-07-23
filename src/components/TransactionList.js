import React, { useState } from 'react';
import TransactionEditForm from './TransactionEditForm';

const TransactionList = ({ transactions, onDeleteTransaction, onEditTransaction }) => {
  const [editingTransactionId, setEditingTransactionId] = useState(null);

  const handleEditClick = (id) => {
    setEditingTransactionId(id);
  };

  const handleCancelEdit = () => {
    setEditingTransactionId(null);
  };

  return (
    <div className="py-8 md:py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Lista de Transacciones</h2>
      {transactions.length === 0 ? (
        <p className="text-center">No hay transacciones registradas.</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Categoría</th>
              <th className="px-4 py-2">Persona</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border px-4 py-2">{transaction.description}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.category}</td>
                <td className="border px-4 py-2">{transaction.personName}</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  {editingTransactionId === transaction.id ? (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                      <div className="bg-white rounded-lg shadow-lg p-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
                        <TransactionEditForm
                          transaction={transaction}
                          onEditTransaction={onEditTransaction}
                          onCancelEdit={handleCancelEdit}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleEditClick(transaction.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-2 py-1 rounded-md mr-2 transition duration-300"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onDeleteTransaction(transaction.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-2 py-1 rounded-md transition duration-300"
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;