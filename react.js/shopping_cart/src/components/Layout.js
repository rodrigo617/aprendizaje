import { Component } from "react";

const styles = {
    layout: { 
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column', //para que el contenido esté centrado en gral
    },
    container: {
        width: '1200px', //alinear desde la izquierda con un ancho fijo de 1200
    }
}

class Layout extends Component{
    render() {
        return(
            <div style={styles.layout}> 
                <div style= {styles.container}> 
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout