import { createContext, PropsWithChildren, useContext, useState } from 'react';

import {
  Toast,
  ToastContainer,
} from '../../../node_modules/react-bootstrap/esm/index';

interface IToastContext {
  notifySuccess: (message: string) => void;
  notifyError: (message: string) => void;
}

const ToastContext = createContext<IToastContext | null>(null);

export function ToastProvider(props: PropsWithChildren) {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [header, setHeader] = useState<string>('Success');
  const [variant, setVariant] = useState<'success' | 'danger'>('success');
  const [msg, setMsg] = useState<string>('');

  const notifyError = (msg: string) => {
    setHeader('Error');
    setVariant('danger');
    setMsg(msg);
    setShowToast(true);
  };

  const notifySuccess = (msg: string) => {
    setHeader('Success');
    setVariant('success');
    setMsg(msg);
    setShowToast(true);
  };

  return (
    <ToastContext.Provider value={{ notifySuccess, notifyError }}>
      {props.children}
      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          bg={variant}
        >
          <Toast.Header>
            <strong className="me-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
}

function useToast() {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error('useToast must be used within ToastProvider');
  return toast;
}

export default useToast;
