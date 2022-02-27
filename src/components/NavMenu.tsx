import "./NavMenu.css";

import { NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

interface IProps {}
interface IState {
	collapsed: boolean;
	widgetDropdownOpen: boolean;
}

export default class NavMenu extends Component<IProps, IState> {
	static displayName = NavMenu.name;

	constructor(props: any) {
		super(props);
		this.state = {
			collapsed: true,
			widgetDropdownOpen: false,
		};
	}

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	static readonly classNameSetter = (link: {isActive: boolean}) => `nav-link ${link.isActive? "selected-link":""}`

	render() {
		return (
			<header>
				<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
					<NavbarBrand tag={Link} to="/">
						React Playground
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={this.state.collapsed}>
						<Nav className="flex-grow" navbar>
							<NavItem>
								<NavLink className={NavMenu.classNameSetter} to="/digital-dice">
									Digital Dice
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={NavMenu.classNameSetter} to="/latin-transcript">
									Latin Transcriptor
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={NavMenu.classNameSetter} to="/fleeing-square">
									Fleeing Square
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={NavMenu.classNameSetter} to="/rainbow-genius">
									Rainbow Genius
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
