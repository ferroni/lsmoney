import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionsModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransacionModal={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />
      <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
