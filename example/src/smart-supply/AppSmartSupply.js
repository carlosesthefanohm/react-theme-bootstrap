import React from 'react'
import { Layout, Preloading, AuthV3 } from 'react-theme-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import permissions from '../Resources/Permissions.json'
import preloading from '../Resources/preloading.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './AppSmartSupply.scss'

export const AppSmartSupply = () => {
  return <BrowserRouter>
    <Switch>
      <Route path={'/'} exact>
        <Layout
          borderLayoutTop
          borderLayoutLeft
          page="datatable"
          title="Productos"
          titleTop="Productos"
          companyName="Compañía"
          brand="https://developerperu.com/public/images/logo/logo_blanco.svg"
          openNavDesktop
          permissions={permissions}
          iconsRight={[
            {
              type: 'html', content: <div className="d-flex">
                <div className="position-relative">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4525 25.6682C11.0606 27.0357 12.4091 28 14.0006 28C15.5922 28 16.9407 27.0357 17.5488 25.6682C16.4266 25.7231 15.2596 25.76 14.0006 25.76C12.7418 25.76 11.5748 25.7231 10.4525 25.6682Z" fill="#3E4954" />
                    <path d="M26.3531 19.74C24.8769 17.8785 22.3995 14.2195 22.3995 10.64C22.3995 7.09073 20.1192 3.89758 16.7995 2.72382C16.7592 1.21406 15.5183 0 14.0006 0C12.4819 0 11.2421 1.21406 11.2017 2.72382C7.88095 3.89758 5.60064 7.09073 5.60064 10.64C5.60064 14.2207 3.12434 17.8785 1.64706 19.74C1.15427 20.3616 1.00191 21.1825 1.24051 21.9363C1.47348 22.6721 2.05361 23.2422 2.79282 23.4595C4.08755 23.8415 6.20991 24.2715 9.44676 24.491C10.8479 24.5851 12.3543 24.64 14.0007 24.64C15.646 24.64 17.1524 24.5851 18.5535 24.491C21.7914 24.2715 23.9127 23.8415 25.2085 23.4595C25.9477 23.2422 26.5268 22.6722 26.7597 21.9363C26.9983 21.1825 26.8448 20.3616 26.3531 19.74Z" fill="#3E4954" />
                  </svg>

                  <div className="position-absolute" style={{
                    top: -17,
                    right: -10
                  }}>
                    <div className="d-flex justify-content-center align-items-center" style={{
                      background: '#D94A23',
                      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                      width: 20,
                      height: 20,
                      borderRadius: 50,
                      color: '#fff',
                      fontSize: 10,
                      boxShadow: '0px 6px 8px #FD6437'
                    }}>18</div>
                  </div>
                </div>
              </div>,
              style: {
                minWidth: 50,
                fontSize: 12
              },
              hideOnMobile: true,
              classNameParent: 'text-dark font-weight-bold',
              dropdown: ({ custom }) => <Dropdown>
                <Dropdown.Toggle as={custom} />
                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex">
                    <i className="fa fa-arrow-left mr-2 align-self-center"></i>
                    <span>Salir</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            },
            {
              type: 'html', content: <div className="d-flex">
                <div className="position-relative">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M22.5678 26.5202C22.8079 26.5202 23.0448 26.6115 23.225 26.7856C24.3769 27.8979 26.0573 28.2683 27.551 27.8047C26.5897 25.802 26.4565 23.5075 27.2015 21.383C28.126 18.7398 28.3577 16.0905 27.3055 13.4334C26.3811 11.0992 24.5972 9.15994 22.3395 8.05408C22.4784 8.79455 22.5484 9.54903 22.5484 10.3115C22.5485 13.5478 21.304 16.5916 19.0444 18.8823C16.7846 21.1733 13.7554 22.4615 10.5148 22.5097C9.9127 22.5191 9.31334 22.4837 8.72076 22.4056C10.5017 25.5274 13.8606 27.5606 17.5516 27.6153C19.1663 27.6403 20.7166 27.302 22.1604 26.6125C22.2904 26.5503 22.4297 26.5202 22.5678 26.5202Z" fill="#3E4954" />
                      <path d="M10.541 0.00236249C4.79225 -0.111786 0.0134653 4.53885 -0.000396074 10.2863C-0.00379211 11.6906 0.270317 13.052 0.814376 14.3331C0.822277 14.3517 0.829624 14.3706 0.836277 14.3897C1.58126 16.5142 1.44812 18.8086 0.486693 20.8114C1.9806 21.2748 3.66074 20.9046 4.81276 19.7922C5.09657 19.518 5.52122 19.449 5.87732 19.6192C7.32091 20.3087 8.87144 20.648 10.486 20.6221C16.1898 20.5374 20.6576 16.0085 20.6576 10.3117C20.6576 4.73921 16.1193 0.114501 10.541 0.00236249ZM4.819 11.8517C3.99307 11.8517 3.32349 11.1832 3.32349 10.3587C3.32349 9.53414 3.99307 8.86568 4.819 8.86568C5.64493 8.86568 6.3145 9.53414 6.3145 10.3587C6.31444 11.1832 5.64493 11.8517 4.819 11.8517ZM10.3286 11.8517C9.50269 11.8517 8.83312 11.1832 8.83312 10.3587C8.83312 9.53414 9.50269 8.86568 10.3286 8.86568C11.1546 8.86568 11.8241 9.53414 11.8241 10.3587C11.8241 11.1832 11.1546 11.8517 10.3286 11.8517ZM15.8383 11.8517C15.0124 11.8517 14.3428 11.1832 14.3428 10.3587C14.3428 9.53414 15.0124 8.86568 15.8383 8.86568C16.6642 8.86568 17.3338 9.53414 17.3338 10.3587C17.3338 11.1832 16.6642 11.8517 15.8383 11.8517Z" fill="#3E4954" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="position-absolute" style={{
                    top: -17,
                    right: -10
                  }}>
                    <div className="d-flex justify-content-center align-items-center" style={{
                      background: '#D94A23',
                      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                      width: 20,
                      height: 20,
                      borderRadius: 50,
                      color: '#fff',
                      fontSize: 10,
                      boxShadow: '0px 6px 8px #FD6437'
                    }}>18</div>
                  </div>
                </div>
              </div>,
              style: {
                minWidth: 50,
                fontSize: 12
              },
              hideOnMobile: true,
              classNameParent: 'text-dark font-weight-bold',
              dropdown: ({ custom }) => <Dropdown>
                <Dropdown.Toggle as={custom} />
                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex">
                    <i className="fa fa-arrow-left mr-2 align-self-center"></i>
                    <span>Salir</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            },
            {
              type: 'html', content: <div className="d-flex">
                <div className="mr-3">
                  <img src="https://developerperu.com/public/images/icons/not-profile-picture.png" className="img-fluid" alt="" style={{
                    borderRadius: 50,
                    width: 40,
                    height: 40
                  }} />
                </div>
                <div className="d-flex flex-column">
                  <strong>developer1</strong>
                  <span>developer1</span>
                </div>
              </div>,
              style: {
                minWidth: 170,
                fontSize: 12
              },
              hideOnMobile: true,
              classNameParent: 'text-dark font-weight-bold',
              dropdown: ({ custom }) => <Dropdown>
                <Dropdown.Toggle as={custom} />
                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex">
                    <i className="fa fa-arrow-left mr-2 align-self-center"></i>
                    <span>Salir</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            },
            {
              type: 'image',
              content: 'https://developerperu.com/public/images/icons/not-profile-picture.png',
              styleImage: {
                borderRadius: 20
              },
              hideOnDesktop: true,
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
          showLevelOne={false}
          showLevelTwo={false}
          iconsLeft={[
            {
              type: 'html', content: <span>Nueva Solicitud</span>,
              style: {
                minWidth: 250,
                fontSize: 15
              },
              noHover: true,
              hideOnMobile: true,
              classNameParent: 'justify-content-start text-dark pl-3 font-weight-bold'
            },
          ]}
          iconsCenter={[
            {
              type: 'html', content: <div className="d-none d-xl-flex">
                <input type="text" className="form-control" style={{
                  width: 300
                }} />
              </div>,
              noHover: true,
              hideOnMobile: true,
              classNameParent: 'justify-content-start'
            },
          ]}
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
        </Layout>
      </Route>
    </Switch >
  </BrowserRouter >
}

export const AppSmartSupplyLoading = () => {
  return <Preloading image={preloading} />
}

export const AppSmartSupplyAuth = () => {
  return <AuthV3
    brand={'https://developerperu.com/public/images/logo/logo_blanco.svg'}
  />
}