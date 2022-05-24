import React, { Fragment, useState } from 'react'

const AuthV2 = ({ brand, brandTop, btnColor, fnLogin }) => {
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

    return <div className="head-dash-login v2">
    <div className="head-dash-login-box">
        <div className="col-12 text-center mb-4">
            <img src={brandTop} className="head-dash-login-logo-top" alt="" />
        </div>
        <div className="bg-white form-row head-dash-login-content">
            <div className="col-12 text-center mb-4">
                <img src={brand} className="head-dash-login-logo" alt="" />
            </div>
            <form autoComplete="off" onSubmit={handleSubmit} className="col-12 needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-12 mb-2">
                        <strong className="text-secondary">ACCESAR</strong>
                    </div>
                    <div className="col-12 mb-2">
                        <small className="text-secondary font-weight-bold">Correo</small>
                        <div className="input-group">
                            <input required type="text" defaultValue={session.p_username} className="form-control form-control-without-border" onChange={e => setSession({ ...session, p_username: e.currentTarget.value })} />
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <small className="text-secondary font-weight-bold">Contraseña</small>
                        <div className="input-group">
                            <input required type="password" defaultValue={session.p_password} className="form-control form-control-without-border" onChange={e => setSession({ ...session, p_password: e.currentTarget.value })} />
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="remember_me" className="custom-control-input" />
                            <label title="" htmlFor="remember_me" className="custom-control-label">Recordarme</label>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-md-end">
                        <a className="text-secondary">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="d-flex justify-content-end">
                            <button type="submit" className={'btn btn-' + btnColor}>
                                {loadSubmit ? <i className="fa fa-circle-notch fa-spin"></i> : <Fragment>
                                    &nbsp;&nbsp;&nbsp;INGRESAR&nbsp;&nbsp;&nbsp;
                                </Fragment>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
}

AuthV2.defaultProps = {
    brand: '',
    btnColor: 'success',
    iconUser: 'fa fa-user',
    iconPassword: 'fa fa-lock',
    fnLogin: () => {}
}

export default AuthV2