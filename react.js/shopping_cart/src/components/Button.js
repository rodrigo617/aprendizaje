import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer', //para agregar la manito cuendo pasa el cursor por el boton
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/> //pasa todas las propiedades que le pase al componente de button
        )
    }
}

export default Button