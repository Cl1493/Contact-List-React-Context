const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
			onDelete: false
		
		},

		actions: {
			createContact: (fullName, emailAdress, address, phoneNumber) => {
				fetch ('https://playground.4geeks.com/apis/fake/contact/',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'full_name': fullName,
					'email': emailAdress,
					'agenda_slug': 'Carla',
					'address': address,
					'phone': phoneNumber
				})
			})
				.then(response => response.jason())
				.then(data=> console.log(data))
				.catch(error => console.log('Error:',error));
			},

			getContacts: () => {
				fetch ('https://playground.4geeks.com/apis/fake/contact/agenda/Carla',
				.then(response => response.jason())
				.then(data => {setStore({ contacts: data})})
				.catch(error => console.log('Error',error));
			)};

			getSingleContact: (id) => {
				fetch (`https://playground.4geeks.com/apis//fake/contact/${id}`,
				.then(response => response.jason())
				.then(data=> setStore({contact: data}))
				.catch(error => console.log('Error',error));
			)};

			editContact: (fullName, emailAdress, address, phoneNumber, id) => {
				fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`,{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'full_name': fullName,
					'email': emailAdress,
					'agenda_slug': 'Carla',
					'address': address,
					'phone': phoneNumber
				})}
				.then(response => response.jason())
				.then(data=> console.log(data))
				.catch(error => console.log('Error',error));
			)}, 
			deleteContact: (id) => {
				fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`,{
				method: 'DELETE',
				})
				.then(response => response.jason())
				.then(data=> console.log(data))
				.catch(error => console.log('Error',error));
			}
			},
	};
};

export default getState;
