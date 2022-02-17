import React, { useState } from "react";
import AddUser from "../../components/AddUser";

const Utilisateurs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userList = [
    {
      id: 0,
      name: "test0",
      firstName: "test0",
      email: "test0@test.com",
      role: "student",
    },
    {
      id: 1,
      name: "test1",
      firstName: "test1",
      email: "test1@test.com",
      role: "student",
    },
    {
      id: 2,
      name: "test2",
      firstName: "test2",
      email: "test2@test.com",
      role: "student",
    },
    {
      id: 3,
      name: "test3",
      firstName: "test3",
      email: "test3@test.com",
      role: "student",
    },
    {
      id: 4,
      name: "test4",
      firstName: "test4",
      email: "test4@test.com",
      role: "student",
    },
  ];
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <AddUser
        openModal={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      />
      <div className="row mb-5">
        <div className="col-auto">
          <input
            type={"text"}
            className="form-control form-control-lg"
            placeholder="Rechercher"
          />
        </div>
        <div className="col-md-8 d-flex justify-content-between">
          <button className="btn btn-success">Rechercher</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Ajouter un utilisateur
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((elm) => (
                <tr>
                  <th scope="row">{elm.id}</th>
                  <td>{elm.name}</td>
                  <td>{elm.firstName}</td>
                  <td>{elm.email}</td>
                  <td>{elm.role}</td>
                  <td>
                    <div className="d-flexjustify-content-between ">
                      <button className="btn btn-danger btn-sm mx-2">
                        Supprimer
                      </button>
                      <button className="btn btn-success btn-sm mx-2">
                        Modifier
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Utilisateurs;
