import * as React from 'react';

interface IPetData {
  pet: string;
  state:
    | {
        mood: string;
        tamagochi: string;
      }
    | undefined;
}

interface ITamagochiStats {
  tamagoshi: string;
  life: number;
  state: number;
  hungry: number;
  isAlive: boolean;
  mood: string;
  name: string;
  petData: IPetData;
  feedPet: (meal: number) => void;
  manageLive: (b: boolean) => void;
  handlePetLife: (points: number) => void;
  petState: (points: number) => void;
  changeMood: (currentMood: string) => void;
  handleTamagoshi: (name: string) => void;
  handleName: (name: string) => void;
  setPetData: React.Dispatch<React.SetStateAction<IPetData>>;
  playWithPet: (points: number) => void;
  setMood: any;
}

interface StatsProviderProps {
  children: React.ReactNode;
}

const StatsContext = React.createContext<ITamagochiStats>(null!);

export const useStats = () => React.useContext(StatsContext);

export const StatsProvider: React.FC<StatsProviderProps> = ({children}) => {
  const [tamagoshi, setTamagoshi] = React.useState('');

  const [life, setLife] = React.useState(100);
  const [state, setState] = React.useState(100);
  const [hungry, setHungry] = React.useState(100);
  const [isAlive, setAlive] = React.useState(false);
  const [mood, setMood] = React.useState('');
  const [name, setName] = React.useState('');
  const [petData, setPetData] = React.useState({} as any);
  // Hay algo mal con estas cuentas verificar que es y que esta pasando dan negativo los resultados
  const feedPet = (meal: number) =>
    setHungry(prev => (meal + prev > 100 ? 100 : meal + prev));

  const manageLive = (b: boolean) => setAlive(b);

  const handlePetLife = (points: number) => {
    if (points < 0) {
      setLife(prev => (prev - points < 100 ? prev - points : 100));
    } else {
      setLife(prev => (prev - points < 0 ? 0 : prev - points));
    }
  };

  const petState = (points: number) =>
    setState(prev => (prev - points < 0 ? 0 : prev - points));

  const changeMood = (currentMood: string) => setMood(currentMood);

  const handleTamagoshi = (name: string) => setTamagoshi(name);

  const handleName = (name: string) => setName(name);

  const playWithPet = (points: number) =>
    setState(prev => (prev + points > 100 ? 100 : prev + points));

  return (
    <StatsContext.Provider
      value={{
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
        playWithPet,
        setMood,
      }}>
      {children}
    </StatsContext.Provider>
  );
};
