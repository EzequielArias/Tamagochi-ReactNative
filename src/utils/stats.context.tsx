import * as React from 'react';


interface ITamagochiStats {
    tamagoshi : string;
    life : number;
    state : number;
    hungry : number;
    isAlive : boolean;
    mood : string;
    name : string;
    feedPet: (meal: number) => void;
    killPet: () => void;
    handlePetLife: (points: number) => void;
    petState: (points: number) => void;
    changeMood: (currentMood: string) => void;
    handleTamagoshi: (name: string) => void;
    handleName: (name: string) => void;
}

interface StatsProviderProps {
    children: React.ReactNode;
  }
  

const StatsContext = React.createContext<ITamagochiStats>(null!);


export const useStats = () => React.useContext(StatsContext);

export const StatsProvider : React.FC<StatsProviderProps> = ({ children }) => {
    
    const [ tamagoshi, setTamagoshi ] = React.useState("");

    const [ life, setLife ] = React.useState(100);
    const [ state, setState ] = React.useState(100);
    const [ hungry, setHungry ] = React.useState(100);
    const [ isAlive, setAlive ] = React.useState(false);
    const [ mood, setMood ] = React.useState("");
    const [ name, setName ] = React.useState("");

    const feedPet = ( meal : number ) =>  setHungry(prev => prev + meal);

    const killPet = () => setAlive(false);
    
    const handlePetLife = ( points : number ) => setLife(prev => points - prev < 0 ? 0 : points - prev);

    const petState = ( points : number ) => setState(prev => points - prev < 0 ? 0 : points - prev);

    const changeMood = ( currentMood : string ) => setMood( currentMood );

    const handleTamagoshi = ( name : string ) => setTamagoshi( name );

    const handleName = ( name : string ) => setName( name );

    return (
        <StatsContext.Provider value={{ 
            hungry, 
            state, 
            life, 
            tamagoshi, 
            mood,
            isAlive,
            name,
            feedPet,
            killPet,
            handlePetLife,
            petState,
            changeMood,
            handleTamagoshi,
            handleName
           }}>
            { children }
        </StatsContext.Provider>
    )
}