import {style, imgStyle, pStyle} from './BoostersStyles.js';

function Earn(){
    return (
        <div style={style}>
            <img 
                style={imgStyle} 
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="earn"
            />
            <p style={pStyle}>Earn</p>
        </div>
    )
}

export default Earn;