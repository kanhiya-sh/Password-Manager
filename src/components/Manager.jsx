import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
	// --------------------------------------------

	const ref = useRef() // yhaa useRef hmara eye icon change kr dega
	const passRef = useRef();
	const [form, setform] = useState({ site: "", username: "", password: "" }) //here we are importing our useState for Setting the form value.
	const [passswordArray, setpassswordArray] = useState([])

	useEffect(() => { // a hook that lets you perform side effects in function components.
		let passwords = localStorage.getItem("passwords");
		if (passwords) {
			setpassswordArray(JSON.parse(passwords))
		}
	}, [])

	// -------yee vala part hmne eye icon change krnee ke liee use kiaa hee --------------

	const showPassword = () => {
		passRef.current.type = "text"
		console.log(ref.current.src)
		if (ref.current.src.includes("icons/hide.png")) {
			ref.current.src = "icons/eye.png"
			passRef.current.type = "password"
		}
		else {
			ref.current.src = "icons/hide.png"
			passRef.current.type = "text"
		}
	}
	// -------------------------------------------
	// ---------- Save the password --------------
	const savePass = () => {
		if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
			toast('Saved !', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setpassswordArray([...passswordArray, { ...form, id: uuidv4() }])
			localStorage.setItem("passwords", JSON.stringify([...passswordArray, { ...form, id: uuidv4() }]))
			console.log(...passswordArray, form)
			setform({ site: "", username: "", password: "" })
		}
		else{
			toast('Password not saved !')
		}
	}
	// ----------FOR DELETING THE TEXT -----------
	const deletePass = (id) => {
		toast('Password Deleted Succesfully!', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		console.log("Deleting items with id", id)
		let conf = confirm("Do You Want to Delete this Password")
		if (conf) {
			setpassswordArray(passswordArray.filter(item => item.id !== id))
			localStorage.setItem("passwords", JSON.stringify(passswordArray.filter(item => item.id !== id)))
		}
	}

	// ----------FOR Editing THE TEXT -----------
	const editPass = (id) => {
		toast('Password Edited !', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		console.log("Editing items with id", id)
		setform(passswordArray.filter(item => item.id === id)[0])
		setpassswordArray(passswordArray.filter(item => item.id !== id))
	}

	// ----------handleChange useState -----------
	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value })
	}

	// ----------FOR COPYING THE TEXT---------------
	const copyText = (copyyy) => {
		toast('Copied to Clipboard !', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		navigator.clipboard.writeText(copyyy)
	}
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

			<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
			</div>
			<div className="p-2 md:p-0 md:mycontainer min-h-[84.5vh]">

				{/*--------------- Heading for the PassOp ------------------ */}

				<h1 className='text-4xl text font-bold text-center pb-3'>
					<span className="text-green-500"> &lt;</span>
					<span className='text-white'>Pass</span>
					<span className="text-green-500">OP/&gt;</span>
				</h1>
				<p className='text-green-500 text-lg text-center pb-8'>Your Own Password Manager</p>

				{/*------- input boxes for the username passsword and website url -----------*/}

				<div className="text-black flex flex-col p-5 gap-8 items-center">
					<input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-600 w-full px-5 py-1.5' type="text" name='site' id='site' />
					<div className="flex flex-col md:flex-row w-full justify-between gap-8">
						<input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-600 w-full px-5 py-1.5' type="text" name='username' id='username' />

						<div className="relative">
							<input ref={passRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-600 w-full px-5 py-1.5' type="password" name='password' id='password' />
							<span className="absolute right-2 top-2 cursor-pointer" onClick={showPassword}>
								<img ref={ref} width={22} src="icons/eye.png" alt="" />
							</span>
						</div>
					</div>

					{/*-------- button for saving the password -------------*/}

					<button onClick={savePass} className='text-white flex justify-center items-center rounded-full px-4 py-2 w-fit hover:bg-green-500 gap-2 border border-green-500'>
						<lord-icon
							src="https://cdn.lordicon.com/jgnvfzqg.json"
							trigger="hover"
							colors="primary:#ffffff,secondary:#08a88a" >
						</lord-icon>
						Save
					</button>
				</div>
				<div className="passwords">
					<h2 className='font-bold text-3xl text-center w-full p-4 mb-5'>Your Passwords</h2>
					{passswordArray.length === 0 && <div> No Password to Show </div>}
					{passswordArray.length != 0 && <table className="table-auto w-full overflow-hidden mb-10">
						<thead className='bg-gradient-to-r from-purple-600 to-blue-500 text-white w-full'>
							<tr>
								<th className='py-2'>Site</th>
								<th className='py-2'>Username</th>
								<th className='py-2'>Password</th>
								<th className='py-2'>Action</th>
							</tr>
						</thead>
						<tbody>
							{passswordArray.map((item, index) => {
								return <tr key={index}>

									{/* For SITE URL */}
									{/* yhaa pe uppar target = _blank krne se apna URL dusre page pe khulega jsse k apna same page disturb na ho */}
									<td className='text-center w-16 py-4 border-b border-purple-700 text-white'>
										<div className='flex items-center justify-center '>
											<a href={item.site} target='_blank'>{item.site}</a>
											<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
												<lord-icon
													style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
													src="https://cdn.lordicon.com/iykgtsbt.json"
													trigger="hover"
													colors="primary:#ffffff,secondary:#08a88a">
												</lord-icon>
											</div>
										</div>
									</td>

									{/* For USERNAME */}
									<td className='text-center w-16 py-4 border-b border-purple-700 text-white'>
										<div className='flex items-center justify-center '>
											<span>{item.username}</span>
											<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
												<lord-icon
													style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
													src="https://cdn.lordicon.com/iykgtsbt.json"
													trigger="hover"
													colors="primary:#ffffff,secondary:#08a88a">
												</lord-icon>
											</div>
										</div>
									</td>

									{/* For PASSWORD */}

									<td className='text-center w-16 py-4 border-b border-purple-700 text-white'>
										<div className='flex items-center justify-center '>
											<span>{item.password}</span>
											<div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
												<lord-icon
													style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
													src="https://cdn.lordicon.com/iykgtsbt.json"
													trigger="hover"
													colors="primary:#ffffff,secondary:#08a88a" >
												</lord-icon>
											</div>
										</div>
									</td>

									{/* FOR Edit */}

									<td className='text-center w-16 py-4 border-b border-purple-700'>
										<span className='cursor-pointer mx-1.5' onClick={() => { editPass(item.id) }}>
											<lord-icon
												style={{ "width": "25px", "height": "25px", "color": "white" }}
												src="https://cdn.lordicon.com/gwlusjdu.json"
												trigger="hover"
												colors="primary:#ffffff,secondary:#08a88a">
											</lord-icon>
										</span>

										{/* FOR Delete */}

										<span className='cursor-pointer mx-1.5' onClick={() => { deletePass(item.id) }}>
											<lord-icon
												src="https://cdn.lordicon.com/skkahier.json"
												trigger="hover"
												colors="primary:#ffffff,secondary:#08a88a"
												style={{ "width": "25px", "height": "25px" }}>
											</lord-icon>
										</span>
									</td>
								</tr>
							})}
						</tbody>
					</table>}
				</div>
			</div>
		</>
	)
}

export default Manager
