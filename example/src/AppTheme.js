import React from 'react'
import { Layout, Preloading, Auth, NotFound } from 'react-theme-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-theme-bootstrap/dist/index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from './Resources/Permissions.json'
import preloading from './Resources/preloading.svg'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} exact>
        <Layout
          page="datatable"
          title="Productos"
          titleTop="Productos"
          companyName="Compañía"
          brand="https://developerperu.com/public/images/logo/logo_blanco.svg"
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
              content: 'https://developerperu.com/public/images/icons/not-profile-picture.png',
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
          <div className="card pt-4">
            <div className="card-body">
              <p>test1</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <p>test1</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <p>test1</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <p>test1</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <p>test1</p>
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
    brand={'https://developerperu.com/public/images/logo/logo_blanco.svg'}
  />
} */

/* const App = () => {
  return <NotFound imageNotFound={'https://developerperu.com/public/images/icons/not-profile-picture.png'}
  backUrl='/'
  Link={_ => <div></div>}
  styleImage={{}} />
} */

export default App
