import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import TransactionTotal from './components/TransactionTotal';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransaction = { ...newTransaction, id: Date.now().toString() };
    setTransactions([...transactions, updatedTransaction]);
    localStorage.setItem('transactions', JSON.stringify([...transactions, updatedTransaction]));
  };

  const handleDeleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleEditTransaction = (transactionId, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === transactionId ? { ...transaction, ...updatedTransaction } : transaction
    );
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-primary py-4 text-white text-center font-bold text-xl">
        Registro de Transacciones
      </header>
      <div className="sticky top-0">
        <TransactionTotal transactions={transactions} />
      </div>
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
