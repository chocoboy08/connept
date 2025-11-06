import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#00000028]" onClick={onClose} />

      <div className="relative bg-white rounded-2xl p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
}
