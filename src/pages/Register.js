import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUserApi } from "../store/actions/users.actions";
const Register = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const navigator = useNavigate();
  const submitForm = (data) => {
    console.log("Register Form", data);
    let body={...data,roles:"role_user"}
    dispatch(registerUserApi(data))
    //navigator("/admin");
  };
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Inscription
                      </h5>
                      <p className="text-center small"></p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit(submitForm)}
                    >
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          {...register("nom", {
                            required: true,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                      </div>
                      {errors.nom && (
                        <div className="text-danger">Nom Invalide!</div>
                      )}
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Prénom
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          id="yourEmail"
                          {...register("prenom", {
                            required: true,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                      </div>
                      {errors.prenom && (
                        <div className="text-danger">Prénom invalide!</div>
                      )}
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourUsername"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                          />
                        </div>
                        {errors.email && (
                          <div className="text-danger">
                            Adresse Email invalide !
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">
                          Numéro téléphone
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          {...register("num_tel", {
                            required: true,
                          })}
                        />
                      </div>
                      {errors.num_tel && (
                        <div className="text-danger">
                          Num Téléphone Invalide!
                        </div>
                      )}
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                        />
                      </div>
                      {errors.password && (
                        <div className="text-danger">
                          mot de passe invalide!
                        </div>
                      )}
                      <div className="col-12"></div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          S'inscrire
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <Link to={"/login"}>Log in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
