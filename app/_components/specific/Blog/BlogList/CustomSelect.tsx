"use client";

import { useEffect, useRef, useState } from "react";
import {
  SelectRoot,
  SelectLabel,
  SelectTrigger,
  SelectChevron,
  SelectPanel,
  SelectOption,
} from "./style";

export interface SelectOptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  options: SelectOptionType[];
  onChange: (value: string) => void;
}

const CustomSelect = ({ label, value, options, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectRoot ref={rootRef}>
      <SelectLabel>{label}</SelectLabel>
      <SelectTrigger
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selected?.label ?? ""}</span>
        <SelectChevron $isOpen={isOpen} viewBox="0 0 20 20" fill="none">
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SelectChevron>
      </SelectTrigger>

      <SelectPanel $isOpen={isOpen}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            type="button"
            $isActive={option.value === value}
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </SelectOption>
        ))}
      </SelectPanel>
    </SelectRoot>
  );
};

export default CustomSelect;
