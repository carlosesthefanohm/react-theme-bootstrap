import React, { Fragment, useState } from 'react'

const Auth = ({ brand, btnColor, iconUser, iconPassword, fnLogin }) => {
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

    return <div className="head-dash-login">
        <div className="head-dash-login-box">
            <div className="bg-white form-row rounded head-dash-login-content">
                <div className="col-12 text-center mb-4">
                    <img src={brand} className="head-dash-login-logo" alt="" />
                </div>

                <form autoComplete="off" onSubmit={handleSubmit} className="col-12 needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-12 mb-2">
                            <small className="text-muted">Nombre de usuario</small>
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className={iconUser}></i></div>
                                </div>
                                <input placeholder="Nombre de usuario" required type="text" className="form-control" onChange={e => setSession({ ...session, p_username: e.currentTarget.value })} />
                                <div className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="col-12 mb-2">
                            <small className="text-muted">Contraseña</small>
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className={iconPassword}></i></div>
                                </div>
                                <input placeholder="Contraseña" required="" type="password" className="form-control" onChange={e => setSession({ ...session, p_password: e.currentTarget.value })} />
                                <div className="invalid-feedback"></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="remember_me" className="custom-control-input" />
                                <label title="" htmlFor="remember_me" className="custom-control-label">Recordarme</label>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <button type="submit" className={'btn btn-block btn-' + btnColor}>
                                {loadSubmit ? <i className="fa fa-circle-notch fa-spin"></i> : <Fragment>
                                    <i className="fa fa-check mr-2"></i> Iniciar Sesión
                                </Fragment>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

Auth.defaultProps = {
    brand: '',
    btnColor: 'success',
    iconUser: 'fa fa-user',
    iconPassword: 'fa fa-lock',
    fnLogin: () => {}
}

export default Auth