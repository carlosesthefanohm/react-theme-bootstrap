function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Card = _interopDefault(require('react-bootstrap/Card'));

var renderIconHtml = function renderIconHtml(_ref) {
  var type = _ref.type,
      content = _ref.content,
      noHover = _ref.noHover,
      style = _ref.style,
      styleImage = _ref.styleImage,
      hideOnMobile = _ref.hideOnMobile,
      hideOnDesktop = _ref.hideOnDesktop,
      classNameParent = _ref.classNameParent;
  return /*#__PURE__*/React__default.createElement("div", {
    className: 'hd-icon' + (noHover ? ' hd-icon-no-hover' : '') + (hideOnMobile ? ' d-none d-lg-flex' : '') + (hideOnDesktop ? ' d-flex d-lg-none' : '') + ' ' + classNameParent,
    style: style
  }, type === 'icon' ? /*#__PURE__*/React__default.createElement("i", {
    className: content
  }) : type === 'image' ? /*#__PURE__*/React__default.createElement("img", {
    src: content,
    className: "hd-icon-image",
    style: styleImage
  }) : type === 'html' ? content : '');
};

var CustomDropdown = function CustomDropdown(_ref2) {
  var type = _ref2.type,
      content = _ref2.content,
      style = _ref2.style,
      styleImage = _ref2.styleImage,
      noHover = _ref2.noHover,
      hideOnMobile = _ref2.hideOnMobile,
      hideOnDesktop = _ref2.hideOnDesktop,
      classNameParent = _ref2.classNameParent;
  return React.forwardRef(function (_ref3, ref) {
    var children = _ref3.children,
        _onClick = _ref3.onClick;
    return /*#__PURE__*/React__default.createElement("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.preventDefault();

        _onClick(e);
      }
    }, renderIconHtml({
      type: type,
      content: content,
      style: style,
      styleImage: styleImage,
      noHover: noHover,
      hideOnMobile: hideOnMobile,
      hideOnDesktop: hideOnDesktop,
      classNameParent: classNameParent
    }), children);
  });
};

var Layout = function Layout(_ref4) {
  var page = _ref4.page,
      children = _ref4.children,
      title = _ref4.title,
      titleTop = _ref4.titleTop,
      showBread = _ref4.showBread,
      permissions = _ref4.permissions,
      companyName = _ref4.companyName,
      brand = _ref4.brand,
      openNavDesktop = _ref4.openNavDesktop,
      iconsRight = _ref4.iconsRight,
      iconsLeft = _ref4.iconsLeft,
      iconsCenter = _ref4.iconsCenter,
      Link = _ref4.Link,
      linkTo = _ref4.linkTo,
      linkToBrand = _ref4.linkToBrand,
      showLevelOne = _ref4.showLevelOne,
      showLevelTwo = _ref4.showLevelTwo,
      desktopExpand = _ref4.desktopExpand,
      pageWrapperContentRight = _ref4.pageWrapperContentRight,
      contentBeforeNavigation = _ref4.contentBeforeNavigation,
      hideTop = _ref4.hideTop,
      borderLayoutTop = _ref4.borderLayoutTop,
      borderLayoutLeft = _ref4.borderLayoutLeft;

  var _useState = React.useState(!openNavDesktop),
      resize = _useState[0],
      setResize = _useState[1];

  var _useState2 = React.useState(false),
      resizeOpen = _useState2[0],
      setResizeOpen = _useState2[1];

  var _useState3 = React.useState(false),
      mobile = _useState3[0],
      setMobile = _useState3[1];

  var _useState4 = React.useState([]),
      navigation = _useState4[0],
      setNavigation = _useState4[1];

  var _useState5 = React.useState(-1),
      idxActive = _useState5[0],
      setIdxActive = _useState5[1];

  var _useState6 = React.useState(0),
      setTouchStartX = _useState6[1];

  React.useEffect(function () {
    window.document.title = title + ' - ' + companyName;
  }, [title, companyName]);
  React.useEffect(function () {
    var nav = [];
    var i = 0;
    permissions.forEach(function (d) {
      if (showLevelOne) {
        nav.push( /*#__PURE__*/React__default.createElement("div", {
          className: "nav-title"
        }, /*#__PURE__*/React__default.createElement("span", null, d.parent.name_tag)));
      }

      d.childrens.forEach(function (p) {
        var childs = [];
        var itemActive = false;
        p.childrens.forEach(function (ch) {
          if (!itemActive) {
            if (idxActive === -1) {
              if (ch.href_tag === page) {
                setIdxActive(i);
              }
            } else {
              if (idxActive === i) {
                itemActive = true;
              }
            }
          }

          childs.push( /*#__PURE__*/React__default.createElement(Link, {
            to: linkTo({
              url: '/' + ch.href_tag
            }),
            className: "nav-second-level-link"
          }, /*#__PURE__*/React__default.createElement("li", {
            className: 'nav-second-level-item ' + (ch.href_tag === page ? (borderLayoutLeft ? ' position-relative' : '') + ' active' : '')
          }, ch.href_tag === page && borderLayoutLeft ? /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
            className: "border-layout-item-bottom-one"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "border-layout-item-bottom-two"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "border-layout-item-top-one"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "border-layout-item-top-two"
          })) : '', /*#__PURE__*/React__default.createElement("div", {
            className: "nav-second-level-title"
          }, ch !== null && ch !== void 0 && ch.icon_tag ? /*#__PURE__*/React__default.createElement("span", {
            className: "nav-second-level-with-icon mr-3 " + ch.icon_tag
          }) : /*#__PURE__*/React__default.createElement("span", {
            className: "nav-second-level-icon"
          }), /*#__PURE__*/React__default.createElement("div", {
            className: "nav-second-level-description"
          }, ch.name_tag)))));
        });
        nav.push( /*#__PURE__*/React__default.createElement("ul", {
          className: "nav-one-level"
        }, /*#__PURE__*/React__default.createElement("li", {
          className: "nav-one-level-item"
        }, showLevelTwo ? /*#__PURE__*/React__default.createElement("div", {
          className: 'nav-one-level-content-title' + (itemActive ? ' active' : ''),
          "data-idx": i,
          onClick: function onClick(e) {
            return setIdxActive(idxActive === parseInt(e.currentTarget.dataset.idx) ? -2 : parseInt(e.currentTarget.dataset.idx));
          }
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "nav-one-level-title"
        }, /*#__PURE__*/React__default.createElement("span", {
          className: "nav-one-level-icon"
        }, /*#__PURE__*/React__default.createElement("i", {
          className: p.parent.icon_tag
        })), /*#__PURE__*/React__default.createElement("span", {
          className: "nav-one-level-description"
        }, p.parent.name_tag)), /*#__PURE__*/React__default.createElement("span", {
          className: 'nav-one-level-arrow' + (itemActive ? ' active' : '')
        })) : '', /*#__PURE__*/React__default.createElement("ul", {
          className: 'nav-second-level' + (itemActive || !showLevelTwo ? ' active' : '')
        }, React__default.Children.toArray(childs)))));
        i++;
      });
    });
    setNavigation(nav);
  }, [resize, resizeOpen, idxActive, page, permissions, showLevelOne, showLevelTwo]);
  var breadCrumb = React.useMemo(function () {
    var bread = {};
    permissions.forEach(function (d) {
      d.childrens.forEach(function (p) {
        p.childrens.forEach(function (ch) {
          if (ch.href_tag === page) {
            bread = {
              parent: d.parent.name_tag,
              child: p.parent.name_tag,
              current: ch.name_tag
            };
          }
        });
      });
    });
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "page-wrapper-braedcrumbd-title"
    }, bread.parent), /*#__PURE__*/React__default.createElement("div", {
      className: "page-wrapper-braedcrumbd-icon"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "page-wrapper-braedcrumbd-title"
    }, bread.child), /*#__PURE__*/React__default.createElement("div", {
      className: "page-wrapper-braedcrumbd-icon"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "page-wrapper-braedcrumbd-title active"
    }, bread.current));
  }, [page, permissions]);
  var resizeNav = React.useCallback(function () {
    if (resize) {
      if (resizeOpen) {
        return '';
      } else {
        return ' nav-resize';
      }
    } else {
      return '';
    }
  }, [resize, resizeOpen]);
  var openNavMobile = React.useCallback(function () {
    return mobile ? ' nav-open-mobile' : '';
  }, [mobile]);

  var renderIcon = function renderIcon(icons) {
    return icons.map(function (_ref5) {
      var type = _ref5.type,
          content = _ref5.content,
          dropdown = _ref5.dropdown,
          _ref5$style = _ref5.style,
          style = _ref5$style === void 0 ? {} : _ref5$style,
          _ref5$styleImage = _ref5.styleImage,
          styleImage = _ref5$styleImage === void 0 ? {} : _ref5$styleImage,
          _ref5$noHover = _ref5.noHover,
          noHover = _ref5$noHover === void 0 ? false : _ref5$noHover,
          _ref5$hideOnMobile = _ref5.hideOnMobile,
          hideOnMobile = _ref5$hideOnMobile === void 0 ? false : _ref5$hideOnMobile,
          _ref5$classNameParent = _ref5.classNameParent,
          classNameParent = _ref5$classNameParent === void 0 ? '' : _ref5$classNameParent,
          _ref5$hideOnDesktop = _ref5.hideOnDesktop,
          hideOnDesktop = _ref5$hideOnDesktop === void 0 ? false : _ref5$hideOnDesktop;

      if (dropdown) {
        return dropdown({
          custom: CustomDropdown({
            type: type,
            content: content,
            style: style,
            styleImage: styleImage,
            noHover: noHover,
            classNameParent: classNameParent,
            hideOnMobile: hideOnMobile,
            hideOnDesktop: hideOnDesktop
          })
        });
      }

      return renderIconHtml({
        type: type,
        content: content,
        style: style,
        styleImage: styleImage,
        noHover: noHover,
        hideOnMobile: hideOnMobile,
        hideOnDesktop: hideOnDesktop,
        classNameParent: classNameParent
      });
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex hd-content-logo hd-height position-relative"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: 'd-flex justify-content-center align-self-center w-100 hd-height ' + (borderLayoutTop ? 'border-layout position-relative' : '')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "align-self-center"
  }, /*#__PURE__*/React__default.createElement(Link, {
    to: linkToBrand
  }, /*#__PURE__*/React__default.createElement("img", {
    src: brand,
    className: "hd-content-logo-image"
  }))), borderLayoutTop ? /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "border-layout-top-one"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "border-layout-top-two"
  })) : '')), /*#__PURE__*/React__default.createElement("div", {
    className: "hd-content-icon hd-icon-left"
  },  /*#__PURE__*/React__default.createElement("div", {
    className: 'hd-icon hd-icon-bar' + (desktopExpand ? '' : ' hide-desktop ') + (resize ? ' active' : ''),
    onClick: function onClick() {
      if (window.innerWidth > 992) {
        setResize(!resize);
      } else {
        setMobile(!mobile);
      }
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-bars hd-icon-bar-close"
  })) , React__default.Children.toArray(renderIcon(iconsLeft))), /*#__PURE__*/React__default.createElement("div", {
    className: "hd-content-icon hd-icon-center"
  }, React__default.Children.toArray(renderIcon(iconsCenter))), /*#__PURE__*/React__default.createElement("div", {
    className: "hd-content-icon hd-icon-right"
  }, React__default.Children.toArray(renderIcon(iconsRight))), /*#__PURE__*/React__default.createElement("div", {
    className: 'nav-left' + resizeNav() + openNavMobile(),
    onMouseEnter: function onMouseEnter() {
      return setResizeOpen(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setResizeOpen(false);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "content-additional"
  }, contentBeforeNavigation), React__default.Children.toArray(navigation)), /*#__PURE__*/React__default.createElement("div", {
    className: 'nav-left-content-bg' + openNavMobile(),
    onClick: function onClick() {
      return setMobile(false);
    },
    onTouchStart: function onTouchStart(e) {
      return setTouchStartX(e.changedTouches[0].screenX);
    },
    onTouchEnd: function onTouchEnd(e) {
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: 'page-wrapper ' + (hideTop ? 'page-wrapper-hide-open' : '') + resizeNav(),
    onTouchStart: function onTouchStart(e) {
      setTouchStartX(e.changedTouches[0].screenX);
    },
    onTouchEnd: function onTouchEnd(e) {
    }
  }, !hideTop ? /*#__PURE__*/React__default.createElement("div", {
    className: "page-wrapper-top d-flex justify-content-between"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", {
    className: "page-wrapper-title"
  }, titleTop ? titleTop : title), showBread ? /*#__PURE__*/React__default.createElement("div", {
    className: "page-wrapper-breadcrumb"
  }, breadCrumb) : ''), /*#__PURE__*/React__default.createElement("div", null, pageWrapperContentRight)) : '', /*#__PURE__*/React__default.createElement("div", {
    className: "page-wrapper-body"
  }, children)));
};

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
  Link: function Link(_) {},
  linkTo: function linkTo(_) {},
  linkToBrand: '',
  showLevelOne: true,
  showLevelTwo: true,
  desktopExpand: true,
  pageWrapperContentRight: '',
  contentBeforeNavigation: '',
  hideTop: false,
  borderLayout: false
};

var Preloading = function Preloading(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-preloading"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image,
    alt: "Preloading"
  }));
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Auth = function Auth(_ref) {
  var brand = _ref.brand,
      btnColor = _ref.btnColor,
      iconUser = _ref.iconUser,
      iconPassword = _ref.iconPassword,
      fnLogin = _ref.fnLogin;

  var _useState = React.useState({
    p_username: '',
    p_password: ''
  }),
      session = _useState[0],
      setSession = _useState[1];

  var _useState2 = React.useState(false),
      loadSubmit = _useState2[0],
      setLoadSubmit = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var $this = e.target;

    if (!$this.checkValidity()) {
      $this.classList.add('was-validated');
    } else {
      $this.classList.remove('was-validated');
      setLoadSubmit(true);
      fnLogin(_extends({}, session, {
        always: function always(_) {
          setLoadSubmit(false);
        }
      }));
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login-box"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bg-white form-row rounded head-dash-login-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 text-center mb-4"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: brand,
    className: "head-dash-login-logo",
    alt: ""
  })), /*#__PURE__*/React__default.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit,
    className: "col-12 needs-validation",
    noValidate: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-2"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-muted"
  }, "Nombre de usuario"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "input-group-text"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: iconUser
  }))), /*#__PURE__*/React__default.createElement("input", {
    placeholder: "Nombre de usuario",
    required: true,
    type: "text",
    className: "form-control",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_username: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-2"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-muted"
  }, "Contrase\xF1a"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "input-group-text"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: iconPassword
  }))), /*#__PURE__*/React__default.createElement("input", {
    placeholder: "Contrase\xF1a",
    required: "",
    type: "password",
    className: "form-control",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_password: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "custom-control custom-checkbox"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: "remember_me",
    className: "custom-control-input"
  }), /*#__PURE__*/React__default.createElement("label", {
    title: "",
    htmlFor: "remember_me",
    className: "custom-control-label"
  }, "Recordarme"))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mt-2"
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "submit",
    className: 'btn btn-block btn-' + btnColor
  }, loadSubmit ? /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-circle-notch fa-spin"
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-check mr-2"
  }), " Iniciar Sesi\xF3n"))))))));
};

Auth.defaultProps = {
  brand: '',
  btnColor: 'success',
  iconUser: 'fa fa-user',
  iconPassword: 'fa fa-lock',
  fnLogin: function fnLogin() {}
};

var AuthV2 = function AuthV2(_ref) {
  var brand = _ref.brand,
      brandTop = _ref.brandTop,
      btnColor = _ref.btnColor,
      fnLogin = _ref.fnLogin;

  var _useState = React.useState({
    p_username: '',
    p_password: ''
  }),
      session = _useState[0],
      setSession = _useState[1];

  var _useState2 = React.useState(false),
      loadSubmit = _useState2[0],
      setLoadSubmit = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var $this = e.target;

    if (!$this.checkValidity()) {
      $this.classList.add('was-validated');
    } else {
      $this.classList.remove('was-validated');
      setLoadSubmit(true);
      fnLogin(_extends({}, session, {
        always: function always(_) {
          setLoadSubmit(false);
        }
      }));
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login v2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login-box"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 text-center mb-4"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: brandTop,
    className: "head-dash-login-logo-top",
    alt: ""
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "bg-white form-row head-dash-login-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 text-center mb-4"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: brand,
    className: "head-dash-login-logo",
    alt: ""
  })), /*#__PURE__*/React__default.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit,
    className: "col-12 needs-validation",
    noValidate: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-2"
  }, /*#__PURE__*/React__default.createElement("strong", {
    className: "text-secondary"
  }, "ACCESAR")), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-2"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-secondary font-weight-bold"
  }, "Correo"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React__default.createElement("input", {
    required: true,
    type: "text",
    defaultValue: session.p_username,
    className: "form-control form-control-without-border",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_username: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-3"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-secondary font-weight-bold"
  }, "Contrase\xF1a"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React__default.createElement("input", {
    required: true,
    type: "password",
    defaultValue: session.p_password,
    className: "form-control form-control-without-border",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_password: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "custom-control custom-checkbox"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: "remember_me",
    className: "custom-control-input"
  }), /*#__PURE__*/React__default.createElement("label", {
    title: "",
    htmlFor: "remember_me",
    className: "custom-control-label"
  }, "Recordarme"))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-md-8 d-flex justify-content-md-end"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "text-secondary"
  }, "\xBFHas olvidado tu contrase\xF1a?")), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "submit",
    className: 'btn btn-' + btnColor
  }, loadSubmit ? /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-circle-notch fa-spin"
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null, "\xA0\xA0\xA0INGRESAR\xA0\xA0\xA0")))))))));
};

AuthV2.defaultProps = {
  brand: '',
  btnColor: 'success',
  iconUser: 'fa fa-user',
  iconPassword: 'fa fa-lock',
  fnLogin: function fnLogin() {}
};

var AuthV3 = function AuthV3(_ref) {
  var brand = _ref.brand,
      btnColor = _ref.btnColor,
      fnLogin = _ref.fnLogin;

  var _useState = React.useState({
    p_username: '',
    p_password: ''
  }),
      session = _useState[0],
      setSession = _useState[1];

  var _useState2 = React.useState(false),
      loadSubmit = _useState2[0],
      setLoadSubmit = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var $this = e.target;

    if (!$this.checkValidity()) {
      $this.classList.add('was-validated');
    } else {
      $this.classList.remove('was-validated');
      setLoadSubmit(true);
      fnLogin(_extends({}, session, {
        always: function always(_) {
          setLoadSubmit(false);
        }
      }));
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login v3"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "head-dash-login-box"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "form-row head-dash-login-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 text-center mb-5"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: brand,
    className: "head-dash-login-logo",
    alt: "Logo"
  })), /*#__PURE__*/React__default.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit,
    className: "col-12 needs-validation v3",
    noValidate: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-3"
  }, /*#__PURE__*/React__default.createElement("h3", {
    className: "text-white text-center"
  }, "Iniciar Sesi\xF3n")), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-4"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-white font-weight-bold"
  }, "Email"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React__default.createElement("input", {
    required: true,
    type: "text",
    defaultValue: session.p_username,
    className: "form-control border-line",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_username: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }, "Necesita introducir un email"))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mb-3"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-white font-weight-bold"
  }, "Contrase\xF1a"), /*#__PURE__*/React__default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React__default.createElement("input", {
    required: true,
    type: "password",
    defaultValue: session.p_password,
    className: "form-control border-line",
    onChange: function onChange(e) {
      return setSession(_extends({}, session, {
        p_password: e.currentTarget.value
      }));
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "invalid-feedback"
  }, "Necesita introducir una contrase\xF1a"))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-12 mt-3"
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "submit",
    className: 'btn btn-block btn-lg btn-' + btnColor
  }, loadSubmit ? /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-circle-notch fa-spin"
  }) : /*#__PURE__*/React__default.createElement(React.Fragment, null, "Ingresar Ahora"))))))));
};

AuthV3.defaultProps = {
  brand: '',
  btnColor: 'success',
  iconUser: 'fa fa-user',
  iconPassword: 'fa fa-lock',
  fnLogin: function fnLogin() {}
};

var NotFound = function NotFound(_ref) {
  var imageNotFound = _ref.imageNotFound,
      backUrl = _ref.backUrl,
      Link = _ref.Link,
      styleImage = _ref.styleImage;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "not-found-container"
  }, /*#__PURE__*/React__default.createElement(Card, {
    className: "d-flex flex-column justify-content-center align-items-center p-5"
  }, /*#__PURE__*/React__default.createElement("img", {
    src: imageNotFound,
    alt: "P\xE1gina No Existe",
    style: _extends({
      maxHeight: '200px'
    }, styleImage)
  }), /*#__PURE__*/React__default.createElement("h3", {
    className: "text-primary font-weight-bold mt-2"
  }, "No Existe La P\xE1gina"), /*#__PURE__*/React__default.createElement(Link, {
    to: backUrl,
    className: "btn btn-outline-primary"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrow-left mr-2"
  }), "Regresar")));
};

NotFound.defaultProps = {
  styleImage: {}
};

exports.Auth = Auth;
exports.AuthV2 = AuthV2;
exports.AuthV3 = AuthV3;
exports.Layout = Layout;
exports.NotFound = NotFound;
exports.Preloading = Preloading;
//# sourceMappingURL=index.js.map
