import React from 'react';
import { DefaultTaskCardContent } from '../DefaultTaskCardContent';
import { ImageTaskCardContent } from '../ImageTaskCardContent';
import { ListTaskCardContent } from '../ListTaskCardContent';
import { AnswersTaskCardContent } from '../AnswersTaskCardContent';

const TYPE_TO_CONTENT_MAPPER = {
  image: ImageTaskCardContent,
  list: ListTaskCardContent,
  answers: AnswersTaskCardContent,
};

export function TaskCardContent(props) {
  const { className, card } = props;

  const Content = TYPE_TO_CONTENT_MAPPER[card?.type] || DefaultTaskCardContent;

  return <Content className={className} card={card} />;
}
