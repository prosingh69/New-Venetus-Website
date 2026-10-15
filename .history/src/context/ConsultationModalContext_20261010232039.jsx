import React, { createContext, useContext, useState, useCallback } from 'react';
import ConsultationModal from '../Components/CommonComponent/ConsultationModal';

const ConsultationModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export const ConsultationModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = useCallback((data = {}) => {
    setModalData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ConsultationModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <ConsultationModal
        isOpen={isOpen}
        onClose={closeModal}
        modalData={modalData}
      />
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error('useConsultationModal must be used within a ConsultationModalProvider');
  }
  return context;
};

