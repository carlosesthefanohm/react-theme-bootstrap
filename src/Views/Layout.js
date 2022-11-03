import React, { useState, useEffect, useMemo, useCallback, Fragment, forwardRef } from 'react'
import '../index.scss'

const renderIconHtml = ({ type, content, noHover, style, styleImage, hideOnMobile, hideOnDesktop, classNameParent }) => {
    return <div className={'hd-icon' + (noHover ? ' hd-icon-no-hover' : '') + (hideOnMobile ? ' d-none d-lg-flex' : '') + (hideOnDesktop ? ' d-flex d-lg-none' : '') + ' ' + classNameParent} style={style}>
        {type === 'icon' ? <i className={content}></i> : (
            type === 'image' ? <img src={content} className="hd-icon-image" style={styleImage} /> : (
                type === 'html' ? content : ''
            )
        )}
    </div>
}

const CustomDropdown = ({ type, content, style, styleImage, noHover, hideOnMobile, hideOnDesktop, classNameParent }) => {
    return forwardRef(({ children, onClick }, ref) => (
        <div ref={ref} onClick={(e) => {
            e.preventDefault()
            onClick(e)
        }}
        >
            {renderIconHtml({
                type, content, style, styleImage, noHover, hideOnMobile, hideOnDesktop, classNameParent
            })}
            {children}
        </div>
    ))
}

const Layout = ({ page, children, title, titleTop, showBread, permissions, companyName, brand, openNavDesktop, iconsRight, iconsLeft, iconsCenter, Link, linkTo, linkToBrand, showLevelOne, showLevelTwo, desktopExpand, pageWrapperContentRight, contentBeforeNavigation, hideTop, borderLayoutTop, borderLayoutLeft }) => {
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
            if (showLevelOne) {
                nav.push(<div className="nav-title">
                    {/* <i className="fas fa-ellipsis-h"></i> */}
                    <span>{d.parent.description}</span>
                </div>)
            }

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
                        childs.push(<Link to={linkTo({ url: ch.a_href })} className="nav-second-level-link">
                            <li className={'nav-second-level-item ' + (ch.a_href === page ? (borderLayoutLeft ? ' position-relative' : '') + ' active' : '')}>
                                {ch.a_href === page && borderLayoutLeft ? <>
                                    <div className="border-layout-item-bottom-one"></div>
                                    <div className="border-layout-item-bottom-two"></div>
                                    <div className="border-layout-item-top-one"></div>
                                    <div className="border-layout-item-top-two"></div>
                                </> : ''}

                                <div className="nav-second-level-title">
                                    {ch?.icon ? <span className={"nav-second-level-with-icon mr-3 " + ch.icon}></span> : <span className="nav-second-level-icon"></span>}
                                    <div className="nav-second-level-description">{ch.description}</div>
                                </div>
                            </li>
                        </Link>)
                    }
                })

                nav.push(<ul className="nav-one-level">
                    <li className="nav-one-level-item">
                        {showLevelTwo ? <div className={'nav-one-level-content-title' + (itemActive ? ' active' : '')} data-idx={i} onClick={e => setIdxActive(idxActive === parseInt(e.currentTarget.dataset.idx) ? -2 : parseInt(e.currentTarget.dataset.idx))}>
                            <div className="nav-one-level-title">
                                <span className="nav-one-level-icon">
                                    <i className={p.parent.icon}></i>
                                </span>
                                <span className="nav-one-level-description">{p.parent.description}</span>
                            </div>
                            <span className={'nav-one-level-arrow' + (itemActive ? ' active' : '')}></span>
                        </div> : ''}
                        <ul className={'nav-second-level' + (itemActive || !showLevelTwo ? ' active' : '')}>
                            {React.Children.toArray(childs)}
                        </ul>
                    </li>
                </ul>)
                i++
            })
        })

        setNavigation(nav)
    }, [resize, resizeOpen, idxActive, page, permissions, showLevelOne, showLevelTwo])

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
        return icons.map(({ type, content, dropdown, style = {}, styleImage = {}, noHover = false, hideOnMobile = false, classNameParent = '', hideOnDesktop = false }) => {
            if (dropdown) {
                return dropdown({
                    custom: CustomDropdown({ type: type, content: content, style, styleImage, noHover, classNameParent, hideOnMobile, hideOnDesktop })
                })
            }

            return renderIconHtml({
                type, content, style, styleImage, noHover, hideOnMobile, hideOnDesktop, classNameParent
            })
        })
    }

    return (<div className="head-dash">
        <div className="d-flex hd-content-logo hd-height position-relative">
            <div className={'d-flex justify-content-center align-self-center w-100 hd-height ' + (borderLayoutTop ?  'border-layout position-relative' : '')}>
                <div className="align-self-center">
                    <Link to={linkToBrand}>
                        <img src={brand} className="hd-content-logo-image" />
                    </Link>
                </div>
                {borderLayoutTop ? <>
                <div className="border-layout-top-one"></div>
                <div className="border-layout-top-two"></div>
                </> : ''}
            </div>
        </div>
        <div className="hd-content-icon hd-icon-left">
            {true ? <div className={'hd-icon hd-icon-bar' + (desktopExpand ? '' : ' hide-desktop ') + (resize ? ' active' : '')} onClick={() => {
                if (window.innerWidth > 992) {
                    setResize(!resize)
                } else {
                    setMobile(!mobile)
                }
            }}>
                {<i className="fa fa-bars hd-icon-bar-close"></i> }
            </div> : ''}
            {React.Children.toArray(renderIcon(iconsLeft))}
        </div>
        <div className="hd-content-icon hd-icon-center">
            {React.Children.toArray(renderIcon(iconsCenter))}
        </div>
        <div className="hd-content-icon hd-icon-right">
            {React.Children.toArray(renderIcon(iconsRight))}
        </div>

        <div className={'nav-left' + resizeNav() + openNavMobile()} onMouseEnter={() => setResizeOpen(true)} onMouseLeave={() => setResizeOpen(false)}>
            <div className="content-additional">{contentBeforeNavigation}</div>
            {React.Children.toArray(navigation)}
        </div>

        <div className={'nav-left-content-bg' + openNavMobile()} onClick={() => setMobile(false)}
            onTouchStart={e => setTouchStartX(e.changedTouches[0].screenX)}
            onTouchEnd={e => {
                if (touchStartX > e.changedTouches[0].screenX) {
                    // setMobile(false)
                }
            }}
        />

        <div className={'page-wrapper ' + (hideTop ? 'page-wrapper-hide-open' : '')  + resizeNav()} onTouchStart={e => {
            setTouchStartX(e.changedTouches[0].screenX)
        }}
            onTouchEnd={e => {
                if (touchStartX < e.changedTouches[0].screenX) {
                    // setMobile(true)
                }
            }}>
            {!hideTop ? <div className="page-wrapper-top d-flex justify-content-between">
                <div>
                    <h2 className="page-wrapper-title">{titleTop ? titleTop : title}</h2>
                    {showBread ?
                        <div className="page-wrapper-breadcrumb">
                            {breadCrumb}
                        </div>
                        : ''}
                </div>
                <div>
                    {pageWrapperContentRight}
                </div>
            </div> : ''}
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
    iconsLeft: [],
    iconsCenter: [],
    Link: _ => { },
    linkTo: _ => { },
    linkToBrand: '',
    showLevelOne: true,
    showLevelTwo: true,
    desktopExpand: true,
    pageWrapperContentRight: '',
    contentBeforeNavigation: '',
    hideTop: false,
    borderLayout: false
}

export default Layout