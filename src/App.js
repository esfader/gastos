import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

const App = () => {
  // Obtener las transacciones guardadas en el localStorage al iniciar la aplicación
  const initialTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const [transactions, setTransactions] = useState(initialTransactions);

  // Actualizar el localStorage cada vez que cambian las transacciones
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    // Asignar un ID único a la nueva transacción
    const updatedTransaction = { ...newTransaction, id: Date.now().toString() };
    setTransactions([...transactions, updatedTransaction]);
  };

  const handleDeleteTransaction = (transactionId) => {
    // Eliminar la transacción con el ID proporcionado
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
  };

  const handleEditTransaction = (transactionId, updatedTransaction) => {
    // Actualizar la transacción con el ID proporcionado
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === transactionId ? { ...transaction, ...updatedTransaction } : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-primary py-4 text-white text-center font-bold text-xl">
        Registro de Transacciones
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDeleteTransaction={handleDeleteTransaction}
          onEditTransaction={handleEditTransaction}
        />
      </main>
      <footer className="bg-primary py-4 text-white text-center">
        © {new Date().getFullYear()} Mi Empresa - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default App;
