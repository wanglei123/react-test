import {Link, Outlet} from "react-router-dom";

export default function Root() {
	return (
		<div style={{display: 'flex'}}>
			<div id="sidebar">
				<nav>
					<ul>
						<li>
							<Link to={`contacts/1`}></Link>
						</li>
						<li>
							<Link to={`contacts/2`}>Your Friend</Link>
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