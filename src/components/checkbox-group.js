import React from "react";

class CheckboxGroup extends React.Component {
  checkboxGroup() {
    let { label, options, input } = this.props;

    if (!options) {
      return;
    }
    return options.map((option, index) => {
      return (
        <div className="checkbox pure-u-sm-1-4 pure-u-1-2" key={index}>
          <input
            type="checkbox"
            name={option[index]}
            value={option.name}
            checked={input.value.indexOf(option.name) !== -1}
            onChange={event => {
              const newValue = [...input.value];
              event.target.checked
                ? newValue.push(option.name)
                : newValue.splice(newValue.indexOf(option.name), 1);
              return input.onChange(newValue);
            }}
          />
          <label htmlFor={option[index]}>{option.name}</label>
        </div>
      );
    });
  }

  render() {
    return <div className="checkbox-group pure-g">{this.checkboxGroup()}</div>;
  }
}

export default CheckboxGroup;
