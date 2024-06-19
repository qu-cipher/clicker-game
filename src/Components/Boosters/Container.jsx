import Boosts from "./Boosts";
import Friends from "./Friends";
import Earn from "./Earn";

function Container() {

    const styles = {
        width: '100%',
        height: '80px',
        position: 'fixed',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:"10px",
        zIndex: '1000'
    };
    
    return (
        <div style={styles}>
            <Boosts />
            <Friends />
            <Earn />
        </div>
    );
}

export default Container;
