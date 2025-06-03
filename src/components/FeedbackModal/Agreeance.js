import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTranslation } from '@newrelic/gatsby-theme-newrelic';

const Container = styled.fieldset`
  accent-color: var(--brand-button-primary-accent);
  border: 0;
  display: flex;
  grid-column: 1 / 3;
  justify-content: space-between;
  padding: 0 0 27px;
  margin: 0 0 24px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #545c60;
  }

  &:last-of-type {
    margin-bottom: 40px;
    padding: 0;
  }

  & legend {
    color: var(--primary-text-color);
    font-size: 1.125rem;
    margin-bottom: 24px;
  }

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & label {
    color: var(--primary-text-color);
    font-size: 0.875rem;
    /* this ensures every label is two lines at any font size */
    max-width: 10ch;
    text-align: center;
  }

  & input {
    --size: 24px;
    appearance: none;
    border: 2px solid var(--accent-text-color);
    border-radius: 50%;
    background: rgba(132, 137, 140, 0.2);
    display: grid;
    place-items: center;
    height: var(--size);
    position: relative;
    width: var(--size);
  }

  & input:checked {
    /* this is just the brand color at 40% opacity */
    background: rgba(28, 231, 131, 0.4);
    border-color: var(--brand-button-primary-accent);
  }

  & input:hover:not(:checked) {
    background: rgba(132, 137, 140, 0.6);
  }

  & input:checked::after {
    --pip-size: 8px;
    background: var(--brand-button-primary-accent);
    border-radius: 50%;
    content: '';
    height: var(--pip-size);
    width: var(--pip-size);
  }
`;

const Agreeance = ({ id, onChange, statement }) => {
  const { t } = useTranslation();
  return (
    <Container onChange={(e) => onChange(e.target.value)}>
      <legend>{statement}</legend>
      <div>
        <label htmlFor={`agreeance-strongly-disagree-${id}`}>
          {t('strings.surveyModal.suprQ.agreeance.strongly-disagree')}
        </label>
        <input
          type="radio"
          id={`agreeance-strongly-disagree-${id}`}
          name={`agreeance-${id}`}
          value="strongly-disagree"
        />
      </div>
      <div>
        <label htmlFor={`agreeance-somewhat-disagree-${id}`}>
          {t('strings.surveyModal.suprQ.agreeance.somewhat-disagree')}
        </label>
        <input
          type="radio"
          id={`agreeance-somewhat-disagree-${id}`}
          name={`agreeance-${id}`}
          value="somewhat-disagree"
        />
      </div>
      <div>
        <label htmlFor={`agreeance-neutral-${id}`}>
          {t('strings.surveyModal.suprQ.agreeance.neutral')}
        </label>
        <input
          type="radio"
          id={`agreeance-neutral-${id}`}
          name={`agreeance-${id}`}
          value="neutral"
        />
      </div>
      <div>
        <label htmlFor={`agreeance-somewhat-agree-${id}`}>
          {t('strings.surveyModal.suprQ.agreeance.somewhat-agree')}
        </label>
        <input
          type="radio"
          id={`agreeance-somewhat-agree-${id}`}
          name={`agreeance-${id}`}
          value="somewhat-agree"
        />
      </div>
      <div>
        <label htmlFor={`agreeance-strongly-agree-${id}`}>
          {t('strings.surveyModal.suprQ.agreeance.strongly-agree')}
        </label>
        <input
          type="radio"
          id={`agreeance-strongly-agree-${id}`}
          name={`agreeance-${id}`}
          value="strongly-agree"
        />
      </div>
    </Container>
  );
};

Agreeance.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  statement: PropTypes.string.isRequired,
};

export default Agreeance;
