import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";

const defaultContextValue = {
  isMobile: false,
  base: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  toggleMenu: false,
  handleToggleMenu: () => {},
};

const applicationContext = createContext(defaultContextValue);

export const ApplicationContextProvider = ({ children }) => {
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1280px)" });
  const baseMediaQuery = useMediaQuery({
    query: "(min-width: 0em) and (max-width: 479px)",
  });
  const smMediaQuery = useMediaQuery({
    query: "(min-width: 480px) and (max-width: 767px)",
  });
  const mdMediaQuery = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });
  const lgMediaQuery = useMediaQuery({
    query: "(min-width: 992px) and (max-width: 1279px)",
  });
  const xlMediaQuery = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1535px)",
  });

  const [isMobile, setIsMobile] = useState(false);
  const [base, setBase] = useState(false);
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(false);

  const [toggleMenu, handleToggleMenu] = useReducer((obj) => !obj, false);

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  useEffect(() => {
    setBase(baseMediaQuery);
  }, [baseMediaQuery]);

  useEffect(() => {
    setSm(smMediaQuery);
  }, [smMediaQuery]);

  useEffect(() => {
    setMd(mdMediaQuery);
  }, [mdMediaQuery]);

  useEffect(() => {
    setLg(lgMediaQuery);
  }, [lgMediaQuery]);

  useEffect(() => {
    setXl(xlMediaQuery);
  }, [xlMediaQuery]);

  return (
    <applicationContext.Provider
      value={{
        isMobile,
        base,
        sm,
        md,
        lg,
        xl,
        toggleMenu,
        handleToggleMenu,
      }}
    >
      {children}
    </applicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  const context = useContext(applicationContext);
  if (context === undefined)
    throw new Error(
      "useApplicationContext must be used within a ApplicationContextProvider"
    );
  return context;
};
