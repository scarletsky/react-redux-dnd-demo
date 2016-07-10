import { assign } from 'lodash';
import { ToyTypes } from 'constants/index';

const initState = {
  toy: {
    id: null,
    props: {
      field: '',
      fieldType: '',
      fieldHint: '',
      value: '',
      useCustomField: false,
      style: {}
    }
  },

  label: {
    label: 'label',
    fontSize: 16,
    lineHeight: 16
  },

  input: {
    value: '',
    placeholder: 'placeholder',
  }

};

const label = {
  type: ToyTypes.LABEL,
  props: initState.label
};

const input = {
  type: ToyTypes.INPUT,
  props: assign({}, initState.toy.props, initState.input)
};

const composition = {
  type: ToyTypes.COMPOSITION,
  props: {}
};

const _initState = [
  assign({}, label, { props: assign({}, label.props, { label: 'single label' })}),
  assign({}, input, { props: assign({}, input.props, { placeholder: 'single input' })}),
  assign({}, composition, {
    props: {
      grid: { rows: 1, cols: 2 },
      toys: [
        assign({}, label, { position: [1, 1], props: assign({}, label.props, { label: 'composition label1' })  }),
        assign({}, input, { position: [1, 2] })
      ]
    }
  }),
  assign({}, composition, {
    props: {
      grid: { rows: 2, cols: 2 },
      toys: [
        assign({}, label, { position: [1, 1], props: assign({}, label.props, { label: 'composition2 label1' })  }),
        assign({}, input, { position: [1, 2] }),
        assign({}, label, { position: [2, 1], props: assign({}, label.props, { label: 'composition2 label2' })  }),
        assign({}, input, { position: [2, 2] })
      ]
    }
  })
];

function toysList(state = _initState, action) {
  return state;
}

export default toysList;
