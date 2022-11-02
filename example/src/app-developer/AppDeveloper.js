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