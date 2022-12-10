import React from 'react';
import { DefaultTaskCard } from '../DefaultTaskCard';

export function TaskCardResolver(props) {
  const { className, card } = props;

  if (!card) {
    return null;
  }

  return <DefaultTaskCard className={className} card={card} />;
}
