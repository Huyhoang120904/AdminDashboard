import React, { useState } from "react";
import DataModal from "./DataModal";

function AddNewButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOpenEmptyModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button
        className="text-2xl text-white rounded-2xl px-4 bg-pink-500 flex items-center justify-center"
        onClick={() => {
          handleOpenEmptyModal();
        }}
      >
        +
      </button>

      <DataModal isModalOpen={isModalOpen} handleClose={handleClose} />
    </>
  );
}

export default AddNewButton;
