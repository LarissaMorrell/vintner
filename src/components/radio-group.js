import React from 'react';

class RadioGroup extends React.Component {

    radioGroup() {
        let imgFileNames = this.props.imgFileNames;
        let {label, input} = this.props;

        return imgFileNames.map((file, index) => {
            return (
            <div className="pure-u-1-3 pure-u-md-1-4" key={index}>
              <input type="radio"
                name="avatar"
                value={file}

                onChange={event => {
                  let newValue;
                  if(event.target.checked) {
                    newValue = file;
                    return newValue;
                  }
                  return;
                  }
                }
              />
              <label htmlFor={file}>
                <img className="radio-avatar" src={`/media/avatars/${file}.png`} alt="avatar" />
              </label>
            </div>)
        });
    }


    render() {
        return (
            <div className="avatar-form pure-g">
                {this.radioGroup()}
            </div>
        )
    }
}
// checked={input.value.indexOf(option.name) !== -1}
// key={index}

export default RadioGroup;

// onChange={(event) => {
//     const newValue = [...input.value];
//     if (event.target.checked) {
//         newValue.push(option.name);
//     } else {
//         newValue.splice(newValue.indexOf(option.name), 1);
//     }
//
//     return input.onChange(newValue);
// }}
