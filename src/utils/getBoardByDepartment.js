import { CONTACT_CENTER_BOARD, RETAIL_DEPARTMENT_BOARD } from '../constants/boards';

export function getBoardByDepartment(department) {
  if (department === 'RETAIL_DEPARTMENT') {
    return RETAIL_DEPARTMENT_BOARD;
  }

  return CONTACT_CENTER_BOARD;
}
