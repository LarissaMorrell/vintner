import React from "react";

class RadioGroup extends React.Component {
  radioGroup() {
    console.log(this.props);
    return this.props.labels.map((label, index) => {
      return (
        <div className="pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-4" key={index}>
          <div className="radio-container">
            <input
              type="radio"
              name={this.props.input.name}
              value={label.value}
              id={label.value}
              onChange={event => this.props.input.onChange(label.value)}
            />
            <label htmlFor={label.value}>{label.labelContent}</label>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="pure-g">{this.radioGroup()}</div>;
  }
}

export default RadioGroup;
