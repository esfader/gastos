import React from 'react';

const TransactionTotal = ({ transactions }) => {
  // Utilizamos el método reduce para sumar los montos de las transacciones
  const totalAmount = transactions.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  return (
    <div className="bg-white rounded-lg shadow-lg mx-auto p-4 mt-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h2 className="text-2xl font-semibold mb-6 text-center">Monto Total</h2>
      <p className="text-3xl font-bold text-center">${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default TransactionTotal;
