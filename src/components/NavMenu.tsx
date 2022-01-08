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
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
			widgetDropdownOpen: false,
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		const classNameSetter = (link: {isActive: boolean}) => `nav-link ${link.isActive? "selected-link":""}`
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
								<NavLink className={classNameSetter} to="/digital-dice">
									Digital Dice
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classNameSetter} to="/latin-transcript">
									Latin Transcriptor
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classNameSetter} to="/fleeing-square">
									Fleeing Square
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className={classNameSetter} to="/rainbow-genius">
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
