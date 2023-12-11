import * as React from 'react';

interface IPetData {
    pet: string;
    state: {
        mood: string;
        tamagochi: string;
    } | undefined;
}

interface ITamagochiStats {
    tamagoshi : string;
    life : number;
    state : number;
    hungry : number;
    isAlive : boolean;
    mood : string;
    name : string;
    petData : IPetData;
    feedPet: (meal: number) => void;
    manageLive: (b : boolean) => void;
    handlePetLife: (points: number) => void;
    petState: (points: number) => void;
    changeMood: (currentMood: string) => void;
    handleTamagoshi: (name: string) => void;
    handleName: (name: string) => void;
    setPetData : React.Dispatch<React.SetStateAction<IPetData>>
    playWithPet : (points: number) => void;
}

interface StatsProviderProps {
    children: React.ReactNode;
  }
  

const StatsContext = React.createContext<ITamagochiStats>(null!);

export const useStats = () => React.useContext(StatsContext);

export const StatsProvider : React.FC<StatsProviderProps> = ({ children }) => {
    
    const [ tamagoshi, setTamagoshi ] = React.useState("");

    const [ life, setLife ] = React.useState(100);
    const [ state, setState ] = React.useState(50);
    const [ hungry, setHungry ] = React.useState(50);
    const [ isAlive, setAlive ] = React.useState(false);
    const [ mood, setMood ] = React.useState("");
    const [ name, setName ] = React.useState("");
    const [ petData, setPetData ] = React.useState({} as any);

    const feedPet = ( meal : number ) =>  setHungry(prev => prev + meal > 100 ? 100 : prev + meal);

    const manageLive = ( b : boolean ) => setAlive(b);
    
    const handlePetLife = ( points : number ) => setLife(prev => points - prev < 0 ? 0 : points - prev);

    const petState = ( points : number ) => setState(prev => points - prev < 0 ? 0 : points - prev);

    const changeMood = ( currentMood : string ) => setMood( currentMood );

    const handleTamagoshi = ( name : string ) => setTamagoshi( name );

    const handleName = ( name : string ) => setName( name );

    const playWithPet = ( points : number ) => setState(prev => prev + points > 100 ? 100 : prev + points );

    return (
        <StatsContext.Provider value={{ 
            hungry, 
            state, 
            life, 
            tamagoshi, 
            mood,
            isAlive,
            name,
            petData,
            feedPet,
            manageLive,
            handlePetLife,
            petState,
            changeMood,
            handleTamagoshi,
            handleName,
            setPetData,
            playWithPet
           }}>
            { children }
        </StatsContext.Provider>
    )
}