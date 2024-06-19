import {style, imgStyle, pStyle} from './BoostersStyles.js';

function Boosts() {
    return (
        <div style={style}>
            <img 
                style={imgStyle} 
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-boost-dating-app-flaticons-lineal-color-flat-icons-3.png" 
                alt="boosts" 
            />
            <p style={pStyle}>Boosts</p>
        </div>
    )
}

export default Boosts;
