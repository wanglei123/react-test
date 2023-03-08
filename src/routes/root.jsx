import {Link, Outlet} from "react-router-dom";

export default function Root() {
	return (
		<div style={{display: 'flex'}}>
			<div id="sidebar">
				<nav>
					<ul>
						<li>
							<Link to={`useEffect`}>useEffect</Link>
						</li>
						<li>
							<Link to={`useContext`}>useContext</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet/>
			</div>
		</div>
	);
}