const onClientEntry = (_, themeOptions) => {
  if (themeOptions.survey) {
    window._nr_survey = {
      environment: `${themeOptions.survey.environment}`,
      reCaptchaToken: `${themeOptions.survey.reCaptchaToken}`,
    };
  }
};
export default onClientEntry;
