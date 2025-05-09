import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Welcome to Gym Master
            </h2>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Modal;
