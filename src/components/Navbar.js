import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ height: '188px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">

              <a className="navbar-item" href="/">
                Trang chủ
              </a>
              <a className="navbar-item" href="https://www.cloudjetpotential.com/">
                Cloudjet Potential
              </a>

              <a className="navbar-item" href="https://www.cloudjetkpi.com/">
                Cloudjet KPI
              </a>
              <a className="navbar-item" href="https://www.cloudjetkpi.com/about-us.html">
                About
              </a>

            </div>
            <div className="navbar-end has-text-centered">
              {/*<a*/}
              {/*  className="navbar-item"*/}
              {/*  href="https://fb.me/cloudjetsolutions"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*  <span className="icon">*/}
              {/*    <img src="https://i.imgur.com/w81SIJZ.png" alt="Facebook" />*/}
              {/*  </span>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
