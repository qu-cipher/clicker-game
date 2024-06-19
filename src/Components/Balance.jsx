import PropTypes from "prop-types";
import coinImage from '../assets/coin.png'

function Balance(props){

    const balanceStyle = {
        userSelect:"none",
        pointerEvents: "none",
        color:"#fff",
        fontFamily: "Poppins , sans-serif",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "4rem"
    };

    const coinImageStyle = {
        maxWidth : "48px",
        maxHeight : "48px",
        display:"inline-block",
        transform: "rotate(-15deg)"
    }
    
    return (
        <h1 style={balanceStyle}>
            <img src={coinImage} alt="" style={coinImageStyle} /> {(props.num).toLocaleString("en-US")}
        </h1>
    );
}

Balance.propTypes = {
    num : PropTypes.number
}

Balance.defaultProps ={
    num : 0
}

export default Balance;