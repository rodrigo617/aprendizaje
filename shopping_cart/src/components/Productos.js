import { Component } from "react"
import Producto from './Producto'

const styles = {
    productos:{
        display: 'flex', //para manipular la direccion del contenido
        flexDirection: 'row', // lectura de izquierda a derecha y no de arriba hacia abajo
        justifyContent: 'space-between', // para que los productos se separen de manera equitativa
    }
}

class Productos extends Component{
   render() {
       const {productos, agregarAlCarro} = this.props
        return(
        <div style={styles.productos}>
            {productos.map(producto =>
            <Producto
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                producto= {producto}
            />)}
        </div> 
    )
  }


}


export default Productos