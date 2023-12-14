import { useState } from 'react';
import { Modal } from 'antd';
import add from "../../assets/agregar.png"
import './modaladdnewproject.css';

//Components 
import { ButtonConfirm, ButtonCancel } from '../Shared/Buttons/Buttons';

function ModalAddNewProject() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className='addProjectMainContainer'>
      <img src={add} alt="addIcon" className='logoutIcon' onClick={showModal}/>
      <Modal
        open={open}
        title="Agregar nuevo proyecto"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className='buttonFooterModalAddProject'>
            <ButtonCancel
            buttonName='Cancelar'
            />
            <ButtonConfirm
              buttonName='Agregar'
            />
          </div>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default ModalAddNewProject