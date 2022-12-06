import React from 'react';
import { motion } from 'framer-motion';
import { getFieldsInRange } from '../../utils/getFieldsInRange';
import { usePrevious } from '../../hooks/usePrevious';
import { getCharacterFigurePosition } from '../../utils/getCharacterFigurePosition';
import styles from './index.module.scss';

export function BoardCharacterFigure(props) {
  const { fields, character } = props;

  const prevCharacter = usePrevious(character);

  const fieldsRange = getFieldsInRange(fields, prevCharacter?.field, character.field);

  const tops =
    fieldsRange.length > 1
      ? fieldsRange.map((field) => getCharacterFigurePosition(field, character).top)
      : getCharacterFigurePosition(fieldsRange[0], character).top;
  const lefts =
    fieldsRange.length > 1
      ? fieldsRange.map((field) => getCharacterFigurePosition(field, character).left)
      : getCharacterFigurePosition(fieldsRange[0], character).left;

  const initialTop = getCharacterFigurePosition(fields[0], character).top;
  const initialLeft = getCharacterFigurePosition(fields[0], character).left;

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ top: initialTop, left: initialLeft }}
      animate={{ top: tops, left: lefts }}
      transition={{ duration: fieldsRange.length * 0.1, ease: 'linear', type: 'tween' }}
    />
  );
}
