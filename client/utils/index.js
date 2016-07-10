import _ from 'lodash';

export const genPadId = (id) => {
  return _.padStart(id, 2, '0');
};
