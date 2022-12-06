import { RETAIL_DEPARTMENT_FIELDS, CONTACT_CENTER_FIELDS } from './fields';

export const RETAIL_DEPARTMENT_BOARD = {
  path: [
    [3, 0],
    [3, 1],
    [2, 1],
    [1, 1],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
  ],
  layout: [
    [
      null,
      RETAIL_DEPARTMENT_FIELDS[4],
      RETAIL_DEPARTMENT_FIELDS[5],
      RETAIL_DEPARTMENT_FIELDS[6],
      RETAIL_DEPARTMENT_FIELDS[7],
      null,
    ],
    [null, RETAIL_DEPARTMENT_FIELDS[3], null, null, RETAIL_DEPARTMENT_FIELDS[8], null],
    [null, RETAIL_DEPARTMENT_FIELDS[2], null, null, RETAIL_DEPARTMENT_FIELDS[9], null],
    [
      RETAIL_DEPARTMENT_FIELDS[0],
      RETAIL_DEPARTMENT_FIELDS[1],
      null,
      null,
      RETAIL_DEPARTMENT_FIELDS[10],
      RETAIL_DEPARTMENT_FIELDS[11],
    ],
  ],
};

export const CONTACT_CENTER_BOARD = {
  path: [
    [3, 0],
    [3, 1],
    [2, 1],
    [1, 1],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
  ],
  layout: [
    [
      null,
      CONTACT_CENTER_FIELDS[4],
      CONTACT_CENTER_FIELDS[5],
      CONTACT_CENTER_FIELDS[6],
      CONTACT_CENTER_FIELDS[7],
      null,
    ],
    [null, CONTACT_CENTER_FIELDS[3], null, null, CONTACT_CENTER_FIELDS[8], null],
    [null, CONTACT_CENTER_FIELDS[2], null, null, CONTACT_CENTER_FIELDS[9], null],
    [
      CONTACT_CENTER_FIELDS[0],
      CONTACT_CENTER_FIELDS[1],
      null,
      null,
      CONTACT_CENTER_FIELDS[10],
      CONTACT_CENTER_FIELDS[11],
    ],
  ],
};
