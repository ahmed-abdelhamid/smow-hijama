import React from 'react';
import { Button } from 'reactstrap';
import { withLocalize } from 'react-localize-redux';

const LangButtons = ({ languages, setActiveLanguage }) => (
  <ul>
    {languages.map(lang => (
      <li key={lang.code}>
        <Button
          onClick={() => {
            setActiveLanguage(lang.code);
          }}
        >
          {lang.name}
        </Button>
      </li>
    ))}
  </ul>
);

export default withLocalize(LangButtons);
