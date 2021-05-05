import React from 'react';
import { css } from '@emotion/react';
import fsBanner from '../images/futurestack-registration.png';

const FutureStackCTA = () => {
  return (
    <section>
      <a href="https://web.cvent.com/event/ac440313-3922-45f5-b5b9-0812f29f4a51/summary?RefId=DOCS&rt=DKI6UYQP806AeXIj4Q4uxw">
        <img
          css={css`
            width: 100%;
          `}
          src={fsBanner}
          alt="Register for FutureStack 2021"
        />
      </a>
    </section>
  );
};

export default FutureStackCTA;
