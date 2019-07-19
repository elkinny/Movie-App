import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLinkButton } from './styled.component';

//@flow

type Props = {
  to: ?string,
  cssClass: string,
};

const LinkButton = (props: Props) => {
  const { to, cssClass, children } = props;
  return (
    <Link to={to} className={cssClass}>
      <StyledLinkButton>{children}</StyledLinkButton>
    </Link>
  );
};

export default LinkButton;
