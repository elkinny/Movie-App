import React from 'react';

import {
  StyledToggle,
  StyledToggleLabel,
  StyledToggleBtn,
  StyledToggleBody,
  StyledToggleItemLeft,
  StyledToggleItemRight,
} from './styled.component';

//@flow

type Props = {
  labels: ?Array<string>,
  onChange: ?(value: mixed) => mixed,
  text: ?string,
  name: ?string,
  defaultValue: ?boolean,
  values: ?Array<string>,
};

const Toggle = (props: Props) => {
  const { labels, text, name, onChange, values, defaultValue } = props;
  return (
    <StyledToggle>
      <StyledToggleLabel> {text} </StyledToggleLabel>
      <StyledToggleBody>
        <StyledToggleItemLeft
          id={'toggle-' + labels[0]}
          name={name}
          type="radio"
          value={values[0]}
          defaultChecked={!defaultValue}
          onChange={onChange}
        />
        <StyledToggleBtn htmlFor={'toggle-' + labels[0]}>{labels[0]}</StyledToggleBtn>
        <StyledToggleItemRight
          id={'toggle-' + labels[1]}
          name={name}
          value={values[1]}
          type="radio"
          defaultChecked={defaultValue}
          onChange={onChange}
        />
        <StyledToggleBtn htmlFor={'toggle-' + labels[1]}>{labels[1]}</StyledToggleBtn>
      </StyledToggleBody>
    </StyledToggle>
  );
};

export default Toggle;
