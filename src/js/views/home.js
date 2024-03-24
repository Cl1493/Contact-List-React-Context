import React, { useEffect, useContext} from "react"; 
import "../../styles/home.css";
import Card from "../component/card.jsx";

import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	},[]);

	return (
	<div className="text-center mt-5">
		{store.contacts.map((item, index) => {
			return (
				<Card 
				nombre={item.full_name} 
				email={item.email} 
				phoneNumber={item.phone} 
				address={item.address}
				id={item.id}
				key={index}/>
		);})}
	</div>
)};
