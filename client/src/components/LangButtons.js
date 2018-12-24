import React from 'react';
import { Button } from 'reactstrap';
import { withLocalize } from 'react-localize-redux';

const LangButtons = ({ languages, setActiveLanguage }) => (
  <div className="lang-buttons">
    {languages.map(lang => (
      <Button
        className="lang-button"
        key={lang.code}
        color="link"
        onClick={() => {
          setActiveLanguage(lang.code);
        }}
      >
        {lang.name}
      </Button>
    ))}
  </div>
);

export default withLocalize(LangButtons);
