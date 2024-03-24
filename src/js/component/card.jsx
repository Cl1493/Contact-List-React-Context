import React, {useContext} from "react"
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
        <Link to={`/editForm/${props.id}`}>
          <button className="position-relative m-3 py-2 px-4 btn btn-info" >Editar</button>
        </Link>
        <button className="position-relative m-3 py-2 px-4 btn btn-info"  onClick={()=>{handleDelete()}}>Eliminar</button>
      </div>
    </div>
    )}

    export default Card;