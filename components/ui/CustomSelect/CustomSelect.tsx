'use client';

import Select, {
  components,
  DropdownIndicatorProps,
  SingleValueProps,
  GroupBase,
  MenuProps,
} from 'react-select';
import { BsChevronDown } from 'react-icons/bs';

type Option = { value: string; label: string };

type CustomSelectProps = {
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
  placeholder?: string;
  width?: string;
  instanceId: string;
  formatSingleValue?: (value: string) => string;
  isSearchable?: boolean;
};

const selectStyles = {
  control: (base: object) => ({
    ...base,
    height: '48px',
    minWidth: '214px',
    maxWidth: '214px',
    borderRadius: '12px',
    backgroundColor: 'var(--color-white)',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  menu: (base: object) => ({
    ...base,
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    animation: 'fadeInDown 0.2s ease-out',
  }),
  menuList: (base: object) => ({
    ...base,
    borderRadius: '12px',
    padding: '14px 18px',
    paddingRight: '12px',
    overflow: 'auto',
  }),
  option: (
    base: object,
    state: { isSelected: boolean; isFocused: boolean },
  ) => ({
    ...base,
    backgroundColor: 'white',
    color:
      state.isSelected || state.isFocused
        ? 'var(--color-main)'
        : 'var(--color-gray)',
    fontWeight: state.isSelected ? '500' : '400',
    cursor: 'pointer',
  }),
  dropdownIndicator: (base: object) => ({
    ...base,
    color: 'var(--color-main)',
    ':hover': {
      color: 'var(--color-gray)',
    },
    '& svg': {
      width: '20px',
      height: '20px',
    },
  }),
  placeholder: (base: object) => ({
    ...base,
    color: 'var(--color-main)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<Option, false, GroupBase<Option>>,
) => (
  <components.DropdownIndicator {...props}>
    <BsChevronDown style={{ color: 'inherit' }} />
  </components.DropdownIndicator>
);

const CustomMenu = (props: MenuProps<Option>) => (
  <components.Menu {...props} className="animate-fade-in-down">
    {props.children}
  </components.Menu>
);

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  instanceId,
  formatSingleValue,
  isSearchable,
}: CustomSelectProps) {
  const PriceSingleValue = (props: SingleValueProps<Option>) => (
    <components.SingleValue {...props}>
      {formatSingleValue
        ? formatSingleValue(props.data.value)
        : props.data.label}
    </components.SingleValue>
  );

  return (
    <Select
      classNamePrefix="react-select"
      instanceId={instanceId}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={selectStyles}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        SingleValue: PriceSingleValue,
        Menu: CustomMenu,
      }}
      isClearable
      isSearchable={isSearchable}
    />
  );
}
