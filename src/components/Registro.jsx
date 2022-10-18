import React from 'react'

export const Registro = () => {
  return (
    <div>
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar Usuario</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Apellido</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Contraseña</label>
                      <input type="password" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Repita Contraseña</label>
                      <input type="passwordPass" className="form-control required" />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <input type="mail" className="form-control required" />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
