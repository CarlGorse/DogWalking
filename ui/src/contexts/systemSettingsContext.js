import { createContext } from "react";

const systemSettingsContext = createContext({
    systemSettings: {},
    setSystemSettings: () => { }
});

export default systemSettingsContext;