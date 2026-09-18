"use client";

import { CalendarIcon } from "@/public/images/svg";
import CustomSelect, { type SelectOptionType } from "./CustomSelect";
import {
  FilterBarWrap,
  FilterGroup,
  DateField,
  DateFieldLabel,
  DateFieldInputWrap,
  DateFieldIcon,
  DateFieldInput,
  ResetButton,
  ResultsBar,
  ResultsCount,
} from "./style";

interface FilterBarText {
  categoryLabel: string;
  sortLabel: string;
  dateFromLabel: string;
  dateToLabel: string;
  reset: string;
  resultsFound: string;
}

interface FilterBarProps {
  text: FilterBarText;
  categoryOptions: SelectOptionType[];
  category: string;
  onCategoryChange: (value: string) => void;
  sortOptions: SelectOptionType[];
  sort: string;
  onSortChange: (value: string) => void;
  dateFrom: string;
  onDateFromChange: (value: string) => void;
  dateTo: string;
  onDateToChange: (value: string) => void;
  isFiltered: boolean;
  onReset: () => void;
  resultsCount: number;
}

const FilterBar = ({
  text,
  categoryOptions,
  category,
  onCategoryChange,
  sortOptions,
  sort,
  onSortChange,
  dateFrom,
  onDateFromChange,
  dateTo,
  onDateToChange,
  isFiltered,
  onReset,
  resultsCount,
}: FilterBarProps) => {
  return (
    <FilterBarWrap data-aos="fade-up">
      <FilterGroup>
        <CustomSelect
          label={text.categoryLabel}
          value={category}
          options={categoryOptions}
          onChange={onCategoryChange}
        />

        <CustomSelect
          label={text.sortLabel}
          value={sort}
          options={sortOptions}
          onChange={onSortChange}
        />

        <DateField>
          <DateFieldLabel>{text.dateFromLabel}</DateFieldLabel>
          <DateFieldInputWrap>
            <DateFieldIcon
              width={18}
              height={18}
              src={CalendarIcon}
              alt="calendar icon"
            />
            <DateFieldInput
              type="date"
              value={dateFrom}
              max={dateTo || undefined}
              onChange={(event) => onDateFromChange(event.target.value)}
            />
          </DateFieldInputWrap>
        </DateField>

        <DateField>
          <DateFieldLabel>{text.dateToLabel}</DateFieldLabel>
          <DateFieldInputWrap>
            <DateFieldIcon
              width={18}
              height={18}
              src={CalendarIcon}
              alt="calendar icon"
            />
            <DateFieldInput
              type="date"
              value={dateTo}
              min={dateFrom || undefined}
              onChange={(event) => onDateToChange(event.target.value)}
            />
          </DateFieldInputWrap>
        </DateField>

        {isFiltered && (
          <ResetButton type="button" onClick={onReset}>
            {text.reset}
          </ResetButton>
        )}
      </FilterGroup>

      <ResultsBar>
        <ResultsCount>
          {resultsCount} {text.resultsFound}
        </ResultsCount>
      </ResultsBar>
    </FilterBarWrap>
  );
};

export default FilterBar;
