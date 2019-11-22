import React from 'react';
import './style.scss';

const ProjectName = process.env.NAME
function Header() {
	return <div className="header">
		{ProjectName}
		<i className="iconfont icon-sousuo"></i>
	</div>;
}

export default Header;
