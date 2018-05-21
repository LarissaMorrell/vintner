import React from "react";

class CheckboxGroups extends React.Component {
  checkboxGroups() {
    let { label, options, input } = this.props;
    if (!options) {
      return;
    }
    return options.map((option, index) => {
      return (
        <div className="checkbox pure-u-sm-1-4 pure-u-1-2" key={index}>
          <input
            type="checkbox"
            name={option.value}
            value={option.value}
            checked={input.value.indexOf(option.value) !== -1}
            onChange={event => {
              const newValue = [...input.value];
              event.target.checked
                ? newValue.push(option.value)
                : newValue.splice(newValue.indexOf(option.value), 1);
              console.log(newValue);
              return input.onChange(newValue);
            }}
          />

          <label htmlFor={option.value}>{option.label}</label>
        </div>
      );
    });
  }

  render() {
    return <div className="checkbox-group pure-g">{this.checkboxGroups()}</div>;
  }
}
export default CheckboxGroups;
