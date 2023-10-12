import React from "react";


export interface IModalComponentProps {
  children: any
}

export const ModalComponent: React.FC<IModalComponentProps> = (props) => {
  

  return (
    <div className="full-container-modal">

        {/* This is simple example for {props.children}! */}
    </div>
  )
}