import React, {useContext} from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = (props) => {
  const {store, actions} =useContext(Context);
  const handleDelete = () => {
    actions.deleteContact(props.id);  
  
  }    

    return (
    <div className="card m-3">
      <div className="row p-3">
        <div className="col-4">
          <img src="https://www.chaomanagement.com/wp-content/uploads/2019/08/Pepe-Viyuela-053-e1607963190390ok-770x539.jpg" className="img-fluid rounded-circle m-auto" alt="..."/>
      </div>
      <div className="col-6 m-auto">  
        <div className="card-body">
          <h5 className="card-title text-start fs-2">{props.nombre}</h5>
          <p className="card-text text-body-tertiary text-start fs-5">✉ {props.email}</p>
          <p className="card-text text-body-tertiary text-start fs-5">✆ {props.phoneNumber}</p>
          <p className="card-text text-body-tertiary text-start fs-5">📫 {props.address}</p>
        </div>
      </div>  
      <div className="col-2 m-auto">
          <Link to={`/editForm/${props.id}`}>
            <button className="position-relative m-3 py-2 px-4 btn btn-success" >Editar</button>
          </Link>
          <button className="position-relative m-3 py-2 px-3 btn btn-success" onClick={()=>{handleDelete()}}>Eliminar</button>
      </div>
      
      </div>
    </div>
    )}

    export default Card;


   