"use client";

import CustomSelect, { type SelectOptionType } from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";
import {
  FilterBarWrap,
  FilterGroup,
  DateField,
  DateFieldLabel,
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
  datePickerPlaceholder: string;
  datePickerToday: string;
  datePickerClear: string;
  months: string[];
  weekdays: string[];
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
          <CustomDatePicker
            value={dateFrom}
            onChange={onDateFromChange}
            text={text}
            max={dateTo || undefined}
          />
        </DateField>

        <DateField>
          <DateFieldLabel>{text.dateToLabel}</DateFieldLabel>
          <CustomDatePicker
            value={dateTo}
            onChange={onDateToChange}
            text={text}
            min={dateFrom || undefined}
          />
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
