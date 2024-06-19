import { useState, useEffect } from 'react';
import Balance from "./Balance";
import Energy from './Energy';
import coinImage from '../assets/coin.png'

function Coin() {
    const energyLimit = 500;
    const energyChargeRate = 2;
    const balanceIncreaseRate = 1;
    const starterBalance = 5000;
    
    const coinStyle = {
        width: '256px',
        height: '256px',
        borderRadius: '50%',
        backgroundImage:`url(${coinImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transform: "rotate(-15deg)"
    };

    const coinBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        textAlign: 'center'
    };
    
    const [balance, setBalance] = useState(starterBalance);
    const [energy, setEnergy] = useState(energyLimit);
    const
    energySize = (100 * energy) / energyLimit;
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            charge();
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, [energy]); 
    
    function charge(){
        if (energy < energyLimit){
            setEnergy(prevEnergy => Math.min(prevEnergy + energyChargeRate, energyLimit));
        }
    }
    
    function handle() {
        if (energy >= balanceIncreaseRate){
            setBalance(prevBalance => prevBalance + balanceIncreaseRate);
            setEnergy(prevEnergy => prevEnergy - balanceIncreaseRate);
        }

    }


    return (
        <div style={coinBoxStyle}>
            <Balance num={balance} />
            <div style={coinStyle} onClick={handle}></div>
            <Energy size={`${energySize}%`} value={energy} limit={energyLimit}/>
        </div>
    );
}

export default Coin;
