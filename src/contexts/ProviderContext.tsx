import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ProviderContextProps {
  isMinMd: boolean
}

const SidebarContext = createContext<ProviderContextProps>({
  isMinMd: false
})

export const useContextProvider = () => useContext(SidebarContext)

const ProviderContext = ({ children }: { children: React.ReactNode }) => {
  const isMinMd = useMediaQuery({ query: '(min-width: 768px)' })

  return <SidebarContext.Provider value={{ isMinMd }}>{children}</SidebarContext.Provider>
}

export default ProviderContext
