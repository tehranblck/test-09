import React from "react";

interface ModalProps {
    isOpen: boolean; // Modal açık mı kapalı mı
    onClose: () => void; // Modal'ı kapatma fonksiyonu
    children: React.ReactNode; // Modal içinde gösterilecek içerik
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 w-full h-screen z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
