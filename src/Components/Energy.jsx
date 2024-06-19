import PropTypes from "prop-types";

function Energy(props){
    const lineStyle = {
        width : "256px",
        maxWidth : "256px",
        height : "10px",
        borderRadius : "10px",
        marginTop : "20px",
        border : "black 1px solid",
        overflow : 'hidden',
    };

    const energyStyle = {
        width : props.size,
        height : "10px",
        backgroundColor : "#32a89b",
        transition : "width 0.3s ease-in-out",
    };

    const paraStyle = {
        marginTop:"5px",
        textAign:"right",
        color : "#fff",
        fontFamily: "Poppins , sans-serif",
        fontWeight: "300",
        fontStyle: "normal",
    }

    return (
        <>
            <div style={lineStyle}>
                <div style={energyStyle}></div>
            </div>
            <p style={paraStyle}>{props.value}/{props.limit} ⚡</p>
        </>
    )
}

Energy.propTypes = {
    size : PropTypes.string,
    limit : PropTypes.number,
    value : PropTypes.number
}

Energy.defaultProps ={
    size : "1%",
    limit : 100,
    value : 1
}


export default Energy;