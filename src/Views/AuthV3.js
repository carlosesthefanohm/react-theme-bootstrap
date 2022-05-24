import React, { Fragment, useState } from 'react'

const AuthV3 = ({ brand, btnColor, fnLogin }) => {
    const [session, setSession] = useState({
        p_username: '',
        p_password: ''
    })

    const [loadSubmit, setLoadSubmit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        let $this = e.target

        if (!$this.checkValidity()) {
            $this.classList.add('was-validated')
        } else {
            $this.classList.remove('was-validated')

            setLoadSubmit(true)
            fnLogin({
                ...session,
                always: _ => {
                    setLoadSubmit(false)
                }
            })
        }
    }

    return <div className="head-dash-login v3">
        <div className="head-dash-login-box">
            <div className="form-row head-dash-login-content">
                <div className="col-12 text-center mb-5">
                    <img src={brand} className="head-dash-login-logo" alt="Logo" />
                </div>
                <form autoComplete="off" onSubmit={handleSubmit} className="col-12 needs-validation v3" noValidate>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                            <h3 className="text-white text-center">Iniciar Sesión</h3>
                        </div>
                        <div className="col-12 mb-4">
                            <small className="text-white font-weight-bold">Email</small>
                            <div className="input-group">
                                <input required type="text" defaultValue={session.p_username} className="form-control border-line" onChange={e => setSession({ ...session, p_username: e.currentTarget.value })} />
                                <div className="invalid-feedback">Necesita introducir un email</div>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <small className="text-white font-weight-bold">Contraseña</small>
                            <div className="input-group">
                                <input required type="password" defaultValue={session.p_password} className="form-control border-line" onChange={e => setSession({ ...session, p_password: e.currentTarget.value })} />
                                <div className="invalid-feedback">Necesita introducir una contraseña</div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <button type="submit" className={'btn btn-block btn-lg btn-' + btnColor}>
                                {loadSubmit ? <i className="fa fa-circle-notch fa-spin"></i> : <Fragment>
                                    Ingresar Ahora
                                </Fragment>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

AuthV3.defaultProps = {
    brand: '',
    btnColor: 'success',
    iconUser: 'fa fa-user',
    iconPassword: 'fa fa-lock',
    fnLogin: () => { }
}

export default AuthV3