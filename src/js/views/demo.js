import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState('');
	const [emailAdress, setEmailAdress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [streetAddress, setStreetAddress] = useState('');

	useEffect(() => {
		actions.getSingleContact(id);
		setFullName(store.contact.full_name);
		setEmailAdress (store.contact.email);
		setPhoneNumber (store.contact.phone);
		setStreetAddress(store.contact.address);
	}),[];

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(fullName,emailAdress,streetAddress,phoneNumber);
		console.log(fullname);
		setFullName('')
		setEmailAdress('')
		setPhoneNumber('')
		setStreetAddress('')

	}

	return 
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Full name</label>
					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
					value={fullName}>
					onChange(e)
				</div>
				<div className="mb-3">
					<label for="" className="form-label">Email</label>
					<input type="email" className="form-control" id="exampleInputPassword1">
				</div>
				<div className="mb-3">
					<label for="" className="form-label">EPhone number</label>
					<input type="text" className="form-control" id="exampleInputPassword1">
				</div>
				<div className="mb-3">
					<label for="" className="form-label">Address</label>
					<input type="text" className="form-control" id="exampleInputPassword1">
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
