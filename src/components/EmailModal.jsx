import React, { useState } from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const EmailModal = () => {
    const [open, setOpen] = useState(true);

    const onCloseModal = () => setOpen(false);
  
    return (
      <div>
        
        <Modal open={open} onClose={onCloseModal} center>
          <h2 className='text-green-600'>Email Sent Successfully !</h2>
        </Modal>
      </div>
    );
}
