import React from 'react'
import { Layout, Preloading, Auth } from 'react-theme-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-theme-bootstrap/dist/index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from './Resources/Permissions.json'
import preloading from './Resources/preloading.svg'
import logo from './Resources/logo.png'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} exact>
        <Layout
          page="datatable"
          title="Productos"
          companyName="Compañía"
          brand="https://lebiom.net/assets/images/dashboard/logo.png"
          openNavDesktop
          permissions={permissions}
          iconsRight={[
            {
              type: 'html', content: <span>developer</span>,
              style: {
                minWidth: 100,
                fontSize: 15
              },
              noHover: true,
              hideOnMobile: true
            },
            {
              type: 'image',
              content: 'https://dashboardbot.tecnicom.pe/assets/images/dashboard/not-profile-picture.png',
              dropdown: ({ custom }) => <Dropdown>
                <Dropdown.Toggle as={custom} />
                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex">
                    <i className="fa fa-arrow-left mr-2 align-self-center"></i>
                    <span>Salir</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
          ]}
          Link={Link}
          linkTo={({ url }) => '/' + url}
          linkToBrand="/"
        >
          <div className="card">
            <div className="card-header">
              Listado de productos
            </div>
            <div className="card-body">
              Prueba
            </div>
          </div>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
}

/* const App = () => {
  return <Preloading image={preloading} />
} */

/* const App = () => {
  return <Auth
    brand={logo}
  />
} */

export default App
