import React from 'react';

import { StyledSubheader } from './styled.component';

const SubHeader = props => {
  return <StyledSubheader>{props.children}</StyledSubheader>;
};

export default SubHeader;
