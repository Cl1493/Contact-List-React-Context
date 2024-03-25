import React from "react"; 
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Delete = () => {
   
      return (

        <><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
          </button><div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                              ...
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                      </div>
                  </div>
              </div></> 
      )       
    export default Delete

    /*
<div className="card">
      <div className="card-body">
        <p>{props.nombre}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
        <p>{props.address}</p>
        <Link to={`/editForm/${props.id}`}>
          <button className="position-relative m-3 py-2 px-4 btn btn-success" >Editar</button>
        </Link>
        <button className="position-relative m-3 py-2 px-4 btn btn-success"  onClick={()=>{handleDelete()}}>Eliminar</button>
      </div>
    </div>

    */

    <div className="container card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="image" alt="..."/>
          </div>
          <div className="card-body">
            <p>{props.nombre}</p>
            <p>{props.email}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.address}</p>
            <Link to={`/editForm/${props.id}`}>
              <button className="position-relative m-3 py-2 px-4 btn btn-success" >Editar</button>
            </Link>
            <button className="position-relative m-3 py-2 px-3 btn btn-success"  onClick={()=>{handleDelete()}}>Eliminar</button>
          </div>
        </div>
    </div>

    /*
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/

 /* 
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/