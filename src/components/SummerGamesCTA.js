import React from 'react';
import { css } from '@emotion/react';
import fsBanner from '../images/summer_games_banner.png';

const SummerGamesCTA = () => {
  return (
    <section>
      <a href="https://docs.google.com/forms/u/0/d/131y2lmupO-ic94DenbWWOv8ie1hd6E3-EhefWh2BmtI/viewform?edit_requested=true">
        <img
          css={css`
            width: 100%;
          `}
          src={fsBanner}
          alt="Register for the New Relic Summer Games 2021"
        />
      </a>
    </section>
  );
};

export default SummerGamesCTA;
