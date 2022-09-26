import React, { useState } from 'react';
import { Modal } from 'antd';
import classes from './Modal.module.css';
const ModalForm = (props) => {
  

  return (
    <div className={classes.modalForm__mainDiv}>
     
    
      <Modal
      style={{width: '150%'}}
       title={props.title}
       visible={props.onVisible} 
       onOk={props.onOk} 
       onCancel={props.onCancel} 
       footer={null}
       >
        {props.children}
      </Modal>
     
    </div>
  );
};

export default ModalForm;