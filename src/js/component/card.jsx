import React from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {
  const {store, actions} =useContext(Context);
  const handleDelete = () => {
    actions.deleteContact(props.id);
    
  }    

    return (
    <div className="card">
      <div className="card-body">
        <p>{props.nombre}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
        <p>{props.address}</p>
        <Link to={"/editForm/${props.id}"}>
          <button>Editar</button>
        </Link>
        <button onClick={()=>{handleDelete()}}>Eliminar</button>
      </div>
    </div>
    )}

    export default Card;