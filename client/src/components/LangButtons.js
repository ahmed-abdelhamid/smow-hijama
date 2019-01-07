import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';

import { activateLanguage } from '../actions/languageActions';

const LangButtons = ({
  languages,
  setActiveLanguage,
  activateLanguage,
  activeLanguage
}) => {
  return (
    <div className="lang-buttons">
      {languages.map(lang => {
        const language = lang.name === 'English' ? 'english' : 'arabic';
        const display = language === activeLanguage ? 'd-none' : 'd-block';
        return (
          <Button
            className={`lang-button ${display}`}
            key={lang.code}
            color="link"
            onClick={() => {
              setActiveLanguage(lang.code); // For Translations Only
              activateLanguage(lang.code); // For Layout
            }}
          >
            {lang.name}
          </Button>
        );
      })}
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
