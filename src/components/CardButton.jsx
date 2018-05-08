// global getSelection

import {element, object} from 'prop-types';

export default class CardButton extends React.Component {
  static propTypes = {
    children: element.isRequired,
    card: object
  };

  static contextTypes = {
    editor: object.isRequired
  };

  onClick = () => {
    const {card} = this.props;
    const {editor} = this.context;

    const payload = {};

    if (editor._hasSelection()) {
      // grab selected content before overwriting with card
      payload.content = _.trim(window.getSelection().toString());
    }

    editor.insertCard(card.name, payload, true);
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
