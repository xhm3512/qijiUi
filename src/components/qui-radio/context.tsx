import * as React from 'react';


const RadioGroupContext = React.createContext<any | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
