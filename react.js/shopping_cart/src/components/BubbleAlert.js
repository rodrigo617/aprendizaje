import { Component } from "react";

const styles = {
    BubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontsize: '0.9rem',
        width: '20px',
    }
}
class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) {return ' '}//pregunto si existe definido un numero n
            return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span style={styles.BubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }

}

export default BubbleAlert