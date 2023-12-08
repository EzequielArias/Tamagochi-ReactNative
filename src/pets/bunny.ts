const normalBunny = `
  (\\(\\  
  ( -.-)  
o_(" ")(")
`

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

export const bunnyStates = [
    {
        state : "sad",
        tamagochi : sadBunny
    },
    {
        state : "surprised",
        tamagochi : surprisedBunny
    },
    {
        state : "happy",
        tamagochi : happyBunny
    },
    {
      state : "normal",
      tamagochi : normalBunny
    }
]
