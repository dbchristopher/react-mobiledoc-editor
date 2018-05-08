// global getSelection

import {element, object} from 'prop-types';

export default class AtomButton extends React.Component {
  static propTypes = {
    children: element.isRequired,
    atom: object
  };

  static contextTypes = {
    editor: object.isRequired
  };

  onClick = () => {
    const {atom} = this.props;
    const {editor} = this.context;

    const payload = {};

    if (editor._hasSelection()) {
      // grab selected content before overwriting with card
      payload.content = _.trim(window.getSelection().toString());
    }

    editor.insertAtom(atom.name, 'new atom', payload);
  };

  render() {
    const {children, ...rest} = this.props;
    return (
      <button {...rest} onClick={this.onClick}>
        {children}
      </button>
    );
  }
}
