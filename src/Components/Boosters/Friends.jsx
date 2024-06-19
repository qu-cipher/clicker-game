import {style, imgStyle, pStyle} from './BoostersStyles.js';

function Friends() {
    return (
        <div style={style}>
            <img
                style={imgStyle}
                src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/58/external-friend-social-media-sbts2018-lineal-color-sbts2018.png"
                alt="refs"
            />
            <p style={pStyle}>Friends</p>
        </div>
    );
}

export default Friends;