import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';

import { activateLanguage } from '../actions/languageActions';

const LangButtons = ({ languages, setActiveLanguage, activateLanguage }) => {
  return (
    <div className="lang-buttons">
      {languages.map(lang => (
        <Button
          className="lang-button"
          key={lang.code}
          color="link"
          onClick={() => {
            setActiveLanguage(lang.code);
            activateLanguage(lang.code);
          }}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

const mapStateToProps = ({ activeLanguage }) => ({
  activeLanguage
});

const mapDispatchToProps = dispatch => ({
  activateLanguage: code => dispatch(activateLanguage(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocalize(LangButtons));
