import React, { useState } from 'react';
import { Button, Modal } from 'antd';

type ModalProps ={
    children: string;
    title: string;
};
const ModalComponent: React.FC<ModalProps>= ({children}:ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children
        }
      </Modal>
    </>
  );
};

export default ModalComponent;