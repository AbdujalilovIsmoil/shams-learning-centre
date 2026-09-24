"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarIcon } from "@/public/images/svg";
import {
  DateFieldIcon,
  DateFieldInputWrap,
  DateFieldTrigger,
  DateFieldTriggerText,
  DatePickerRoot,
  DatePickerPopover,
  DatePickerHeader,
  DatePickerNav,
  DatePickerTitle,
  DatePickerWeekdays,
  DatePickerGrid,
  DatePickerCell,
  DatePickerFooter,
  DatePickerFooterBtn,
} from "./style";

interface CustomDatePickerText {
  datePickerPlaceholder: string;
  datePickerToday: string;
  datePickerClear: string;
  months: string[];
  weekdays: string[];
}

interface CustomDatePickerProps {
  value: string;
  onChange: (isoDate: string) => void;
  text: CustomDatePickerText;
  min?: string;
  max?: string;
}

interface Cell {
  day: number;
  month: number;
  year: number;
  inMonth: boolean;
}

const toIso = (year: number, month: number, day: number) => {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
};

const parseIso = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;
  return { year: y, month: m - 1, day: d };
};

const buildGrid = (year: number, month: number): Cell[] => {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: Cell[] = [];

  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, inMonth: false, year, month: month - 1 });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, year, month });
  }
  while (cells.length % 7 !== 0) {
    const dayOffset = cells.length - (startOffset + daysInMonth);
    cells.push({ day: dayOffset + 1, inMonth: false, year, month: month + 1 });
  }

  return cells;
};

const CustomDatePicker = ({ value, onChange, text, min, max }: CustomDatePickerProps) => {
  const now = new Date();
  const parsedValue = value ? parseIso(value) : null;
  const parsedMin = min ? parseIso(min) : null;
  const parsedMax = max ? parseIso(max) : null;

  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(parsedValue?.year ?? now.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsedValue?.month ?? now.getMonth());
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parsedValue) return;
    setViewYear(parsedValue.year);
    setViewMonth(parsedValue.month);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const grid = useMemo(() => buildGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  const goToMonth = (delta: number) => {
    const date = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(date.getFullYear());
    setViewMonth(date.getMonth());
  };

  const isDisabled = (cell: Cell) => {
    const iso = toIso(cell.year, cell.month, cell.day);
    if (parsedMin && iso < min!) return true;
    if (parsedMax && iso > max!) return true;
    return false;
  };

  const handlePick = (cell: Cell) => {
    if (isDisabled(cell)) return;
    onChange(toIso(cell.year, cell.month, cell.day));
    setIsOpen(false);
  };

  const formatDisplay = () => {
    if (!parsedValue) return text.datePickerPlaceholder;
    return `${String(parsedValue.day).padStart(2, "0")} ${text.months[parsedValue.month]}, ${parsedValue.year}`;
  };

  return (
    <DatePickerRoot ref={rootRef}>
      <DateFieldInputWrap>
        <DateFieldIcon width={18} height={18} src={CalendarIcon} alt="calendar icon" />
        <DateFieldTrigger type="button" onClick={() => setIsOpen((prev) => !prev)}>
          <DateFieldTriggerText $isPlaceholder={!value}>
            {formatDisplay()}
          </DateFieldTriggerText>
        </DateFieldTrigger>
      </DateFieldInputWrap>

      <DatePickerPopover $isOpen={isOpen}>
        <DatePickerHeader>
          <DatePickerNav type="button" onClick={() => goToMonth(-1)} aria-label="previous month">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </DatePickerNav>
          <DatePickerTitle>
            {text.months[viewMonth]} {viewYear}
          </DatePickerTitle>
          <DatePickerNav type="button" onClick={() => goToMonth(1)} aria-label="next month">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </DatePickerNav>
        </DatePickerHeader>

        <DatePickerWeekdays>
          {text.weekdays.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </DatePickerWeekdays>

        <DatePickerGrid>
          {grid.map((cell, index) => {
            const iso = toIso(cell.year, cell.month, cell.day);
            const disabled = isDisabled(cell);
            return (
              <DatePickerCell
                key={index}
                type="button"
                $muted={!cell.inMonth}
                $selected={value === iso}
                $today={toIso(now.getFullYear(), now.getMonth(), now.getDate()) === iso}
                $disabled={disabled}
                disabled={disabled}
                onClick={() => handlePick(cell)}
              >
                {cell.day}
              </DatePickerCell>
            );
          })}
        </DatePickerGrid>

        <DatePickerFooter>
          <DatePickerFooterBtn
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            disabled={!value}
          >
            {text.datePickerClear}
          </DatePickerFooterBtn>
          <DatePickerFooterBtn
            type="button"
            onClick={() =>
              handlePick({
                day: now.getDate(),
                month: now.getMonth(),
                year: now.getFullYear(),
                inMonth: true,
              })
            }
          >
            {text.datePickerToday}
          </DatePickerFooterBtn>
        </DatePickerFooter>
      </DatePickerPopover>
    </DatePickerRoot>
  );
};

export default CustomDatePicker;
