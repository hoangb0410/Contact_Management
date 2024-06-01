import React from "react";

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className="header">
      <div className="container">
        <h3>Contact List ({nbOfContacts})</h3>
        <button className="btn" onClick={() => toggleModal(true)}>
          <i className="bi bi-plus-quare"></i>Add New Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
