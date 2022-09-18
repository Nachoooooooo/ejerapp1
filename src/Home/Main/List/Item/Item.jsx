import React, { Component } from "react";
import './Item.css'

export class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.data.name || "Tarea TODO"
    }
  }
  render() {
    const { info, priority, image } = this.props.data;
    let url_img = image || "https://previews.123rf.com/images/timbrk/timbrk1603/timbrk160300399/54593965-pixelada-palabra-espa%C3%B1ola-tarea-que-significa-tarea-en-espa%C3%B1ol-a-base-de-cubos-de-vidrio-matriz-imag.jpg"

    return (
      <div id="listado">
      <article>
        <h2>{this.state.name}</h2>
        <img src={url_img} alt={this.state.name} className="image_item" />
        <h3>{info}</h3>
        <p>Prioridad 1/10: {priority} </p>
        <button id="delete-button" onClick={this.props.delete}>Borrar</button>
      </article>
      </div>
    )
  }
}

export default Item
