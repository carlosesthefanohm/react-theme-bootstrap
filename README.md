# react-theme-bootstrap

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-theme-bootstrap.svg)](https://www.npmjs.com/package/react-theme-bootstrap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-theme-bootstrap
```

## Usage

```jsx
import React from 'react'
import { Layout, Preloading, Auth } from 'react-theme-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-theme-bootstrap/dist/index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from './Resources/Permissions.json'
import preloading from './Resources/preloading.svg'
import logo from './Resources/logo.png'

const App = () => {
  return <Layout
    page="datatable"
    title="Productos"
    companyName="Compañía"
    brand="https://developerperu.com/public/images/logo/logo.svg"
    openNavDesktop
    permissions={permissions}
    iconsRight={[
      {
        type: 'html', content: <span>developer</span>,
        style: {
          minWidth: 100,
          fontSize: 15
        },
        noHover: true
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
}

const App = () => {
  return <Preloading image={preloading} />
}

const App = () => {
  return <Auth
    brand={logo}
  />
}

export default App
```

## License

MIT © [carlosesthefanohm](https://github.com/carlosesthefanohm)
