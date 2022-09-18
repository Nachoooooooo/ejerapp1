import React, { Component } from "react"
import { v4 as uuidv4 } from 'uuid';

import Item from "./Item/Item"
import data from './Item/tareas.json'

export class List extends Component {

  constructor(props) {
    super(props)

    this.image = React.createRef(); //imagen referencia

    this.state = {
      tareas: data// precarga [] de tareas,
    }

  }

  paintTareas = () => this.state.tareas.map((tarea, i) => <Item data={tarea} key={uuidv4()} delete={() => this.deleteTarea(i)} />)

  deleteTareas = () => this.setState({ tareas: [] });
  resetTareas = () => this.setState({ tareas: data }); //recarga inicial

  deleteTarea = (i) => {
    //filter
    const remainingTareas = this.state.tareas.filter((tarea, j) => i !== j);
    this.setState({ tareas: remainingTareas });
  }

  addTarea = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const info = event.target.info.value;
    const priority = event.target.priority.value;

    const image = this.image.current.value; //leer campo por referencia
    alert(image);

    const newTarea = { name, info, priority, image };
    this.setState({ tareas: [...this.state.tareas, newTarea] })
  }

  sendMessage = () => {
    // código para enviar los datos al back 
    //... fetch POST al back
    //...
    alert("Tarea enviada: " + this.state.tarea);
    
    // Vaciar input + state
    this.tarea.current.value="";
    this.setState({ tarea:""});
  }
  handleChange = () => {
    const tarea = this.tarea.current.value; //Leer campo por referencia
    this.setState({ tarea });
  }

  render() {
    return (
      <section>
      <div id="tarea">
        <h1>AÑADIR TAREA</h1>
        <form onSubmit={this.addTarea}>
          <label htmlFor="name">Nombre:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label htmlFor="info">Info:</label><br />
          <input type="text" id="info" name="info" /><br />
          <label htmlFor="priority">Prioridad 1/10:</label><br />
          <input type="number" id="priority" name="priority" /><br />
          <label htmlFor="image">URL imágen:</label><br />
          <input type="url" id="image" name="image" ref={this.image} /><br />
          <input type="submit" id="add-button" value="Añadir" />
        </form>
        </div>

        <h1>LISTADO DE TAREAS</h1>
        {this.paintTareas()}
<div id="botones">
        {this.state.tareas.length ?
          <button id="borrar-button"
          onClick={this.deleteTareas}>Borrar tareas</button>
          : ""}

        <button id="add-button"
        onClick={this.addTarea}>Añadir Tarea</button>
        <button id="reload-button"
        onClick={this.resetTareas}>Recargar tareas</button>
</div>
      </section>
      
    )
  }
}



export default List
