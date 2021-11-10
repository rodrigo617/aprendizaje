
import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
    button: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative', //para que la posicion sea relativa al div que lo contiene
        left: 12,
        top: 20,
        
    },
}
class Carro extends Component {
    render () {
        const { carro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) 
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value= {cantidad}/>
                    : null
                    }
                </span>
                <button style={styles.button}>
                    Carro
                </button>
                <DetallesCarro carro = {carro} />
            </div>

        )
    }
}

export default Carro