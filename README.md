# react-theme-bootstrap

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-theme-bootstrap.svg)](https://www.npmjs.com/package/react-theme-bootstrap) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-theme-bootstrap
```

## Usage

```jsx
import React, { useEffect, useState } from 'react'
import { Layout, Preloading, NotFound, Auth } from 'react-theme-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from '../Resources/Permissions.json'
import preloading from '../Resources/preloading.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ReactTableBootstrap from 'react-table-bootstrap'
import './AppDeveloper.scss';

export const AppDeveloper = () => {
  const [body, setBody] = useState([])
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    let b = []
    for (let j = 1; j < 100; j++) {
      b.push({
        id: j,
        name: 'Carlos' + j,
        balance: 10 * (j + 1),
        enabled: j % 2 === 0 ? 1 : 0,
        checked: 0,
        uno: 1,
        dos: 2,
        enabled_text: j % 2 === 0 ? 'ACTIVO' : 'INACTIVO'
      })
    }
    setBody(b)
    setIsProcessing(false)
  }, [])

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
          <NotFound imageNotFound={'https://developerperu.com/public/images/icons/not-profile-picture.png'}
            backUrl='/'
            Link={_ => <div></div>}
            styleImage={{}}
          />
          <div className="card mt-4">
            <div className="card-body">
              <ReactTableBootstrap
                head={[

                  [
                    { name: 'id', text: 'ID', align: 'center' },
                    { name: 'name', text: 'Nombres' },
                    { name: 'balance', text: 'Salario', align: 'center' },
                    {
                      name: 'enabled', text: 'Estado', align: 'center', render: r => <strong className={'text-' + (parseInt(r.enabled) === 1 ? 'success' : 'danger')}>
                        {parseInt(r.enabled) === 1 ? 'ACTIVO' : 'INACTIVO'}
                      </strong>
                    },
                    {
                      name: 'actions', text: 'Acciones', align: 'center',
                      render: () => {
                        return <>
                          <button className='btn btn-primary btn-sm'>
                            Edit
                          </button>
                        </>
                      }
                    }
                  ],
                ]}
                isProcessing={isProcessing}
                rows={body}
              />
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <div>test1</div>
            </div>
          </div>
        </Layout>
      </Route>
    </Switch>
  </BrowserRouter>
}

export const AppDeveloperLoading = () => {
  return <Preloading image={preloading} />
}

export const AppDeveloperAuth = () => {
  return <Auth
    brand={'https://developerperu.com/public/images/logo/logo.svg'}
  />
}

export const AppDeveloperNotFound = () => {
  return <NotFound imageNotFound={'https://developerperu.com/public/images/icons/not-profile-picture.png'}
    backUrl='/'
    Link={_ => <div></div>}
    styleImage={{}} />
}
```

```scss
  // App Developer
  $primary: rgb(20, 21, 101);
  $danger: #ff3636;
  $warning: #ffbb33;
  $success: rgb(91, 175, 27);
  $info: #2ca8ff;
  $dark: #1B1B1C;

  $hdGradient: linear-gradient(118deg, rgb(20, 21, 101), rgb(116, 117, 249));
  $hdSidebarBg: $hdGradient;
  $hdWidthFull: 270px;
  $hdColumns: $hdWidthFull 1fr 1fr;
  $hdHeaderLogoBorder: none;
  $hdLoginBg: url('https://www.greenfield-it.co.uk/wp-content/uploads/2019/01/What-do-I-need-to-know-for-a-Software-Developer-interview.jpg');
  $hdLoginMaxWidth: 500px;
  $hdLoginLogoMinWidth: 200px;
  $hdLoginContentPadding: 50px 30px;
  $hdLoginContentBorderRadius: 30px;
  $hdSidebarBgMovil: none;
  $hdLogoBgMovil: none;
  $hdSidebarBgRightIcon: none;
  $hdSidebarBgLeftIcon: none;
  $hdLogoBg: none;
  $headDashBg: $hdGradient;
  $bgLight: #eaf0f7;

  @import "bootstrap";
  @import 'react-theme-bootstrap/dist/index.scss';
  @import 'react-table-bootstrap/dist/index.scss';
```

## Versions
Node - 12.22.12


## License

MIT © [carlosesthefanohm](https://github.com/carlosesthefanohm)
