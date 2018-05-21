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
            name="drinkType"
            value={option}
            checked={input.value.indexOf(option.name) !== -1}
            onChange={event => {
              const newValue = [...input.value];
              if (event.target.checked) {
                newValue.push(option.name);
              } else {
                newValue.splice(newValue.indexOf(option.name), 1);
              }
              return input.onChange(newValue);
            }}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      );
    });
  }

  render() {
    return <div className="checkbox-group pure-g">{this.checkboxGroups()}</div>;
  }
}

export default CheckboxGroups;
