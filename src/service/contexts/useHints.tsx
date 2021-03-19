import React, { createContext, useContext, useEffect, useState } from "react";

import { useData } from "./useData";

type THintsContext = {
  visiblePriorities: string[];
  setVisiblePriorities: (value: string[]) => void;
  isVisibleAllPriorities: boolean;
  setVisibleAllPriorities: (value: boolean) => void;
  visibleAcNames: string[];
  setVisibleAcNames: (value: string[]) => void;
  isVisibleAllAcNames: boolean;
  setVisibleAllAcNames: (value: boolean) => void;
  isVisibleAllIncidentHints: boolean;
  setVisibleAllIncidentHints: (value: boolean) => void;
  priorityHovered: string;
  setPriorityHovered: (value?: string) => void;
  datesHovered: number[];
  setDatesHovered: (value?: number[]) => void;
  acNameHovered: string;
  setAcNameHovered: (value?: string) => void;
  incidentHovered: string;
  setIncidentHovered: (value?: string) => void;
};

export const HintsContext = createContext<Partial<THintsContext>>({});

export const HintsProvider: React.FC = ({ children }) => {
  const [visiblePriorities, setVisiblePriorities] = useState<string[]>([]);
  const [visibleAcNames, setVisibleAcNames] = useState<string[]>([]);

  const [isVisibleAllPriorities, setVisibleAllPriorities] = useState(false);
  const [isVisibleAllAcNames, setVisibleAllAcNames] = useState(true);

  const [isVisibleAllIncidentHints, setVisibleAllIncidentHints] = useState(
    false
  );

  const [priorityHovered, setPriorityHovered] = useState<string | undefined>();
  const [datesHovered, setDatesHovered] = useState<number[] | undefined>();
  const [acNameHovered, setAcNameHovered] = useState<string | undefined>();
  const [incidentHovered, setIncidentHovered] = useState<string | undefined>();

  const { priorityPalette, acNamesPalette } = useData();

  useEffect(() => {
    if ([0, priorityPalette!.length].includes(visiblePriorities.length))
      setVisibleAllPriorities(true);
    else setVisibleAllPriorities(false);
  }, [priorityPalette, visiblePriorities, setVisibleAllPriorities]);

  useEffect(() => {
    if ([0, acNamesPalette!.length].includes(visibleAcNames.length))
      setVisibleAllAcNames(true);
    else setVisibleAllAcNames(false);
  }, [acNamesPalette, visibleAcNames, setVisibleAllAcNames]);

  useEffect(() => {
    setVisibleAllAcNames(true);
    setVisibleAllPriorities(true);
  }, [setVisibleAllAcNames, setVisibleAllPriorities]);

  const value = {
    visiblePriorities,
    setVisiblePriorities,
    visibleAcNames,
    setVisibleAcNames,
    isVisibleAllPriorities,
    setVisibleAllPriorities,
    isVisibleAllAcNames,
    setVisibleAllAcNames,
    isVisibleAllIncidentHints,
    setVisibleAllIncidentHints,
    priorityHovered,
    setPriorityHovered,
    datesHovered,
    setDatesHovered,
    acNameHovered,
    setAcNameHovered,
    incidentHovered,
    setIncidentHovered,
  };

  return (
    <HintsContext.Provider value={value}>{children}</HintsContext.Provider>
  );
};

export const useHints = () => useContext(HintsContext);
