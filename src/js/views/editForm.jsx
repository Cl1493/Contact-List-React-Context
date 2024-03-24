import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const { id } = useParams();

    useEffect(() => {
        actions.getSingleContact(id);
        setFullName(store.contact.full_name);
        setEmailAdress(store.contact.email);
        setPhoneNumber(store.contact.phone);
        setStreetAddress(store.contact.address);
    }, [id]); 

    const handleSubmit = e => {
        e.preventDefault();
        actions.editContact(fullName, emailAdress, streetAddress, phoneNumber, id);
        console.log(fullName);
        setFullName('');
        setEmailAdress('');
        setPhoneNumber('');
        setStreetAddress('');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Escribe tu nombre completo"
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1"
                        value={emailAdress}
                        onChange={e => setEmailAdress(e.target.value)}
                        placeholder="Escribe tu email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Escribe tu número de telefono"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        value={streetAddress}
                        onChange={e => setStreetAddress(e.target.value)}
                        placeholder="Escribe tu dirección"
                    />
                </div>
                <button type="submit" className="position-relative m-3 py-2 px-4 btn btn-info">Submit</button>
            </form>
            <Link to="/">
                <button className="position-relative m-3 py-2 px-4 btn btn-info">Back home</button>
            </Link>
        </div>
    );
};