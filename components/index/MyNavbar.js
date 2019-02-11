import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Link from "next/link";
import "../../index.css";

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="none" light expand="md">
          <NavbarBrand>
            <Link href="/">
              <img src="/static/profile8.jpg" className="navbar-img" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/resume" className="navbar-link">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/jakeadelman/"
                  className="navbar-link"
                >
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>{`
          a {
            color: rgba(0, 0, 0, 0.5);
          }
          a:hover {
            color: rgba(0, 0, 0, 0.7);
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */
