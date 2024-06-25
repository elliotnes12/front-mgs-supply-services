import React, { createContext, useState, useContext } from 'react';

// Crear contexto
const TabBarContext = createContext();

// Proveedor del contexto
export const TabBarProvider = ({ children }) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  return (
    <TabBarContext.Provider value={{ isTabBarVisible, setIsTabBarVisible }}>
      {children}
    </TabBarContext.Provider>
  );
};

// Hook para usar el contexto
export const useTabBar = () => useContext(TabBarContext);
