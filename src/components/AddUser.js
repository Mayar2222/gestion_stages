import React from "react";
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
const AddUser = ({ openModal, handleClose }) => {
  return (
    <Modal isOpen={openModal}>
      <ModalHeader>Ajouter un nouveau utilisateur</ModalHeader>
      <ModalBody>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-12">
            <label htmlFor="yourUsername" className="form-label">
              Nom
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                name="username"
                className="form-control"
                id="yourUsername"
                required
              />
              <div className="invalid-feedback">
                Please enter your username.
              </div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="yourUsername" className="form-label">
              Prénom
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                name="username"
                className="form-control"
                id="yourUsername"
                required
              />
              <div className="invalid-feedback">
                Please enter your username.
              </div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="yourUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                name="username"
                className="form-control"
                id="yourUsername"
                required
              />
              <div className="invalid-feedback">
                Please enter your username.
              </div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="yourPassword" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="yourPassword"
              required
            />
            <div className="invalid-feedback">Please enter your password!</div>
          </div>
          <div className="col-md-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Etudiant
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Entrprise
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Admin
              </label>
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClose();
          }}
        >
          Confirm
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default AddUser;
