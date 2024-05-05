import React, { useState } from 'react'
import { FaCheck, FaCheckCircle, FaMailBulk } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const EmailModal = () => {
    const [open, setOpen] = useState(true);

    const onCloseModal = () => setOpen(false);
  
    return (
      <div >
        
        <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-[#f58b33] flex items-center p-6 ">
  <FaCheckCircle className="mr-2" /> Email Sent Successfully!
</h2>
        </Modal>
      </div>
    );
}
