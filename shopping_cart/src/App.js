import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import { computeHeadingLevel } from '@testing-library/dom'

class App extends Component{
 state = {
   productos: [
      {name: 'tomates', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'arbejas', price: 2500, img: '/productos/arbejas.jpg'},
      {name: 'lechuga', price: 500, img: '/productos/lechuga.jpg'}, 
   ],
   carro: [],
  }
  agregarAlCarro = (producto) => {
    const { carro } = this.state
    // preguntar si dentro del carro de compras hay un elemento que tenga el mismo nombre que mi producto
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carro: newCarro})
    }
 
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })


   }
  render() {
     return(
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos= {this.state.productos}
          />
        </Layout>  
      </div> 
    )
  }
}


export default App;
