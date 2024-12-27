import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-gradient-to-r from-black to-purple-950 text-white">
			<div className="mycontainer flex justify-between items-center py-3 px-8">
				<div className="logo font-bold text-2xl">
					<span className="text-green-500"> &lt;</span>
					Pass
					<span className="text-green-500">OP/&gt;</span>
				</div>
				{/* <ul>
					<li className="flex gap-5">
						<a href="/" className="hover:font-bold">Home</a>
						<a href="*" className="hover:font-bold">About</a>
						<a href="#" className="hover:font-bold">Contact</a>
					</li>
				</ul> */}
				<button className="flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full my-5 mx-2 ring-white ring-1">
					<img className="invert w-10 p-1" src="icons/git.png" alt="github logo" />
					<span className="font-bold px-2"><a href="https://github.com/kanhiya-sh" target='_blank'>GitHub</a></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
