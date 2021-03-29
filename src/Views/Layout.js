import React, { useState, useEffect, useMemo, useCallback, Fragment, forwardRef } from 'react'
import '../index.scss'

const renderIconHtml = ({ type, content, noHover, style, styleImage }) => {
    return <div className={'hd-icon' + (noHover ? ' hd-icon-no-hover' : '')} style={style}>
        {type === 'icon' ? <i className={content}></i> : (
            type === 'image' ? <img src={content} className="hd-icon-image" style={styleImage} /> : (
                type === 'html' ? content : ''
            )
        )}
    </div>
}

const CustomDropdown = ({ type, content, style, styleImage, noHover }) => {
    return forwardRef(({ children, onClick }, ref) => (
        <div ref={ref} onClick={(e) => {
            e.preventDefault()
            onClick(e)
        }}
        >
            {renderIconHtml({
                type, content, style, styleImage, noHover
            })}
            {children}
        </div>
    ))
}

const Layout = ({ page, children, title, showBread, permissions, companyName, brand, openNavDesktop, iconsRight, iconsLeft }) => {
    const [resize, setResize] = useState(!openNavDesktop)
    const [resizeOpen, setResizeOpen] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [navigation, setNavigation] = useState([])
    const [idxActive, setIdxActive] = useState(-1)
    const [touchStartX, setTouchStartX] = useState(0)

    useEffect(() => {
        window.document.title = title + ' - ' + companyName
    }, [title, companyName])

    useEffect(() => {
        let nav = []
        let i = 0

        permissions.forEach(d => {
            nav.push(<div className="nav-title">
                <i className="fas fa-ellipsis-h"></i>
                <span>{d.parent.description}</span>
            </div>)

            d.childrens.forEach(p => {
                let childs = []
                let itemActive = false

                p.childrens.forEach(ch => {
                    if (!itemActive) {
                        if (idxActive === -1) {
                            if (ch.a_href === page) {
                                setIdxActive(i)
                            }
                        } else {
                            if (idxActive === i) {
                                itemActive = true
                            }
                        }
                    }

                    if (parseInt(ch.show) === 1) {
                        childs.push(<a href="" className="nav-second-level-link">
                            <li className={'nav-second-level-item' + (ch.a_href === page ? ' active' : '')}>
                                <div className="nav-second-level-title">
                                    <span className="nav-second-level-icon"></span>
                                    <div className="nav-second-level-description">{ch.description}</div>
                                </div>
                            </li>
                        </a>)
                    }
                })

                nav.push(<ul className="nav-one-level">
                    <li className="nav-one-level-item">
                        <div className={'nav-one-level-content-title' + (itemActive ? ' active' : '')} data-idx={i} onClick={e => setIdxActive(idxActive === parseInt(e.currentTarget.dataset.idx) ? -2 : parseInt(e.currentTarget.dataset.idx))}>
                            <div className="nav-one-level-title">
                                <span className="nav-one-level-icon">
                                    <i className={p.parent.icon}></i>
                                </span>
                                <span className="nav-one-level-description">{p.parent.description}</span>
                            </div>
                            <span className={'nav-one-level-arrow' + (itemActive ? ' active' : '')}></span>
                        </div>
                        <ul className={'nav-second-level' + (itemActive ? ' active' : '')}>
                            {React.Children.toArray(childs)}
                        </ul>
                    </li>
                </ul>)
                i++
            })
        })

        setNavigation(nav)
    }, [resize, resizeOpen, idxActive, page, permissions])

    const breadCrumb = useMemo(() => {
        let bread = {}

        permissions.forEach(d => {
            d.childrens.forEach(p => {
                p.childrens.forEach(ch => {
                    if (ch.a_href === page) {
                        bread = {
                            parent: d.parent.description,
                            child: p.parent.description,
                            current: ch.description
                        }
                    }
                })
            })
        })

        return <Fragment>
            <div className="page-wrapper-braedcrumbd-title">{bread.parent}</div>
            <div className="page-wrapper-braedcrumbd-icon" />
            <div className="page-wrapper-braedcrumbd-title">{bread.child}</div>
            <div className="page-wrapper-braedcrumbd-icon" />
            <div className="page-wrapper-braedcrumbd-title active">{bread.current}</div>
        </Fragment>
    }, [page, permissions])

    const resizeNav = useCallback(() => {
        if (resize) {
            if (resizeOpen) {
                return ''
            } else {
                return ' nav-resize'
            }
        } else {
            return ''
        }
    }, [resize, resizeOpen])

    const openNavMobile = useCallback(() => {
        return mobile ? ' nav-open-mobile' : ''
    }, [mobile])

    const renderIcon = icons => {
        return icons.map(({ type, content, dropdown, style = {}, styleImage = {}, noHover = false }) => {
            if (dropdown) {
                return dropdown({
                    custom: CustomDropdown({ type: type, content: content, style, styleImage, noHover })
                })
            }

            return renderIconHtml({
                type, content, style, styleImage, noHover
            })
        })
    }

    return (<div className="head-dash">
        <div className="d-flex hd-content-logo hd-height">
            <div className="d-flex justify-content-center align-self-center w-100 hd-height">
                <div className="align-self-center">
                    <img src={brand} className="hd-content-logo-image" />
                </div>
            </div>
        </div>
        <div className="hd-content-icon hd-icon-left">
            <div className={'hd-icon hd-icon-bar' + (resize ? ' active' : '')} onClick={() => {
                if (window.innerWidth > 992) {
                    setResize(!resize)
                } else {
                    setMobile(!mobile)
                }
            }}>
                <i className="fa fa-bars"></i>
            </div>
            {React.Children.toArray(renderIcon(iconsLeft))}
        </div>
        <div className="hd-content-icon hd-icon-right">
            {React.Children.toArray(renderIcon(iconsRight))}
        </div>

        <div className={'nav-left' + resizeNav() + openNavMobile()} onMouseEnter={() => setResizeOpen(true)} onMouseLeave={() => setResizeOpen(false)}>
            {React.Children.toArray(navigation)}
        </div>

        <div className={'nav-left-content-bg' + openNavMobile()} onClick={() => setMobile(false)}
            onTouchStart={e => setTouchStartX(e.changedTouches[0].screenX)}
            onTouchEnd={e => {
                if (touchStartX > e.changedTouches[0].screenX) {
                    setMobile(false)
                }
            }}
        />

        <div className={'page-wrapper' + resizeNav()} onTouchStart={e => {
            setTouchStartX(e.changedTouches[0].screenX)
        }}
            onTouchEnd={e => {
                if (touchStartX < e.changedTouches[0].screenX) {
                    setMobile(true)
                }
            }}>
            <div className="page-wrapper-top">
                <h2 className="page-wrapper-title">{title}</h2>
                {showBread ?
                    <div className="page-wrapper-breadcrumb">
                        {breadCrumb}
                    </div>
                    : ''}
            </div>
            <div className="page-wrapper-body">
                {children}
            </div>
        </div>
    </div>
    )
}

Layout.defaultProps = {
    page: '',
    showBread: true,
    permissions: [],
    companyName: '',
    brand: '',
    iconsHeader: [],
    title: '',
    openNavDesktop: true,
    iconsRight: [],
    iconsLeft: []
}

export default Layout