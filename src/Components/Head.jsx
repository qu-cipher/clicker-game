

function Head(){
    const containerStyle = {
        width: "100%",
        height: "80px",
        textAlign: "center",
        background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 100%)",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px"
    };

    const textStyle = {
        textAlign: "center",
        fontFamily: "Pacifico, cursive",
        fontWeight: "400",
        fontStyle: "italic",
        color: "#fff",
        fontSize:"2.5rem"
    };

    return (
        <div style={containerStyle}>
            <h1 style={textStyle}>Emeruem</h1>
        </div>
    )
}

export default Head;