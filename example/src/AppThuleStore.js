import React from 'react'
import { Layout, Preloading, AuthV2, NotFound } from 'react-theme-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-theme-bootstrap/dist/index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import permissions from './Resources/Permissions.json'
import preloading from './Resources/preloading.svg'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

const AppThuleStore = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} exact>
        <Layout
          page="datatable"
          title="Productos"
          companyName="Compañía"
          brand="https://developerperu.com/public/images/logo/logo_blanco.svg"
          permissions={permissions}
          showBread
          iconsRight={[
              {
                  type: 'image',
                  content: 'https://developerperu.com/public/images/icons/not-profile-picture.png',
                  styleImage: {
                      borderRadius: 20
                  },
                  dropdown: ({ custom }) => <Dropdown>
                      <Dropdown.Toggle as={custom} />
                      <Dropdown.Menu>
                          <Dropdown.Item className="d-flex" onClick={_ => {
                              localStorage.clear()
                              window.location.href = '/';
                          }}>
                              <i className="fa fa-arrow-left mr-2 align-self-center"></i>
                              <span>Salir</span>
                          </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              },
              {
                  type: 'html', content: <span>administrador</span>,
                  style: {
                      minWidth: 100,
                      fontSize: 15
                  },
                  noHover: true,
                  hideOnMobile: true
              },
          ]}
          Link={Link}
          linkTo={({ url }) => '/' + url}
          linkToBrand="/"
          showLevelOne={false}
          desktopExpand={false}
          contentBeforeNavigation={<>
              <div className="d-flex flex-column align-items-center">
                  <img src="https://developerperu.com/public/images/logo/logo_blanco.svg" alt="Logo" style={{
                      maxWidth: 150
                  }} />
                  <div className="d-flex mt-3">
                      <div className="mr-2">
                          <img src="https://developerperu.com/public/images/icons/not-profile-picture.png" alt="Perfil" style={{
                              maxWidth: 50,
                              borderRadius: 10
                          }} />
                      </div>
                      <div className="d-flex flex-column mt-2 mb-4">
                          <strong className="text-primary">Carlos</strong>
                          <span style={{ fontSize: 10 }}>ADMINISTRADOR</span>
                      </div>
                  </div>
              </div>
          </>}
          hideTop
        >
          <div className="card pt-4">
            <div className="card-body">
              <p>test1</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <p>test2</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <p>test3</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <p>test4</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <p>test5</p>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <p>test6</p>
            </div>
          </div>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default AppThuleStore

/* const AppThuleStore = () => {
  return <Preloading image={preloading} />
} */

/* const AppThuleStore = () => {
  return <AuthV2
    brand="https://developerperu.com/public/images/logo/logo.svg"
    brandTop="https://developerperu.com/public/images/logo/logo_blanco.svg"
  />
}

export default AppThuleStore */

