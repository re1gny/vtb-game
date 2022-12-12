import React from 'react';
import { BaseTaskCardContent } from '../BaseTaskCardContent';

export function DefaultTaskCardContent(props) {
  const { className, card } = props;

  return <BaseTaskCardContent className={className} card={card} />;
}
