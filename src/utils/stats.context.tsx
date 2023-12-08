import * as React from 'react';


interface ITamagochiStats {
    tamagoshi : string;
    life : number;
    state : string;
    hungry : number;
    isAlive : boolean;
    mood : number;
}

interface StatsProviderProps {
    children: React.ReactNode;
  }
  

const StatsContext = React.createContext<ITamagochiStats>(null!);


export const useStats = () => React.useContext(StatsContext);


export const StatsProvider : React.FC<StatsProviderProps> = ({ children }) => {
    
    const [ tamagoshi, setTamagoshi ] = React.useState("");

    const [ life, setLife ] = React.useState(100);
    const [ state, setState ] = React.useState("");
    const [ hungry, setHungry ] = React.useState(100);
    const [ isAlive, setAlive ] = React.useState(true);
    const [ mood, setMood ] = React.useState(0);

    const feedPet = ( meal : number ) =>  setHungry(prev => prev + meal);

    const killPet = () => setAlive(false);
    
    const handlePetLife = ( points : number ) => setLife(points);

    return (
        <StatsContext.Provider value={{ 
            hungry, 
            state, 
            life, 
            tamagoshi 
           
           }}>
            { children }
        </StatsContext.Provider>
    )
}