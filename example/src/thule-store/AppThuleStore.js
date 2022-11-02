import React from 'react'
import { Layout, AuthV2 } from 'react-theme-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from '../Resources/Permissions.json'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './AppThuleStore.scss'

export const AppThuleStore = () => {
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
          <div className="card mt-4">
            <div className="card-body">
              <div>test1</div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <div>test2</div>
            </div>
          </div>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
}

export const AppThuleStoreAuth = () => {
  return <AuthV2
    brand="https://developerperu.com/public/images/logo/logo.svg"
    brandTop="https://developerperu.com/public/images/logo/logo_blanco.svg"
  />
}
