import { tabValueType } from ".";

export const TabPanel = ({ currentValue, value, children, ...other }) => {
  return (
    <div hidden={value !== currentValue} {...other}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  value: tabValueType,
  currentValue: tabValueType,
};
