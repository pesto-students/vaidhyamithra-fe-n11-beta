import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";
import { TAB_ORIENTATION } from "./tabMenu.constants";

export const TabMenu = ({ value, setValue, orientation, menuItems }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      orientation={orientation}
    >
      {menuItems.map(({ label, value }) => (
        <Tab key={value} label={label} value={value} />
      ))}
    </Tabs>
  );
};

export const tabValueType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]).isRequired;

TabMenu.propTypes = {
  value: tabValueType,
  setValue: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf(Object.values(TAB_ORIENTATION)),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: tabValueType,
      label: PropTypes.string.isRequired,
    })
  ),
};

TabMenu.defaultProps = {
  orientation: TAB_ORIENTATION.HORIZONTAL,
};
