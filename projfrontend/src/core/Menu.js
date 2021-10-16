import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/helper/";

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "#2ecc72" };
	} else {
		return { color: "#FFFFFF" };
	}
};

const Menu = ({ history, path }) => {
	return (
		<div>
			<ul className="nav nav tabs bg-dark">
				<li className="nav-item">
					<Link className="nav-link" to="/" style={currentTab(history, "/")}>
						Home
					</Link>
				</li>

				{isAuthenticated() && (
					<Fragment>
						<li className="nav-item">
							<Link className="nav-link" to="/cart" style={currentTab(history, "/cart")}>
								Cart
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/user/dashboard"
								style={currentTab(history, "/user/dashboard")}>
								Dashboard
							</Link>
						</li>
					</Fragment>
				)}
				{!isAuthenticated() && (
					<Fragment>
						<li className="nav-item">
							<Link className="nav-link" to="/signup" style={currentTab(history, "/signup")}>
								Signup
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/signin" style={currentTab(history, "/signin")}>
								Signin
							</Link>
						</li>
					</Fragment>
				)}
				{isAuthenticated() && (
					<li className="nav-item">
						<spam
							onClick={() => {
								signout(() => {
									history.push("/");
								});
							}}
							className="nav-link text-warning">
							Signout
						</spam>
					</li>
				)}
			</ul>
		</div>
	);
};
export default withRouter(Menu);
