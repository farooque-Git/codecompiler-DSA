import React from "react";
import { LANGUAGE_VERSIONS } from "../../constants";
import "./CodeEditor.css";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className="language-selector-container">
      <form>
        <label htmlFor="language" className="language-selector-label">
         
        </label>
        <select
          id="language"
          value={language}
          onChange={handleChange}
          className="language-selector-select"
        >
          {languages.map(([lang, version]) => (
            <option key={lang} value={lang}>
              {lang} -{" "}
              <span className="language-selector-option">{version}</span>
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default LanguageSelector;
