import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary navbar-light bg-light mb-3">
			<Link to="/">
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success m-3">Add new Contact</button>
				</Link>
			</div>
		</nav>
	);
};
