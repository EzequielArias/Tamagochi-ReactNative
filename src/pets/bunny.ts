const normalBunny = `
  (\\(\\  
  ( -.-)  
o_(" ")(")
`;

const sadBunny = `
  (|  (|  
  ( T_T)  
o_(")(")
`;

const surprisedBunny = `
  (|(|  
  ( O.O)  
o_(")(")
`;

const happyBunny = `
    (|(|  
    ( ^.^)  
  o_(")(")
`;

export const bunnyStates = {
  pet: 'Bunny',
  states: [
    {
      mood: 'sad',
      tamagochi: sadBunny,
    },
    {
      mood: 'surprised',
      tamagochi: surprisedBunny,
    },
    {
      mood: 'happy',
      tamagochi: happyBunny,
    },
    {
      mood: 'normal',
      tamagochi: normalBunny,
    },
  ],
};
