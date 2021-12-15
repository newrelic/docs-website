DROP TABLE IF EXISTS public."locales" CASCADE;
DROP TABLE IF EXISTS public."statuses" CASCADE;
DROP TABLE IF EXISTS public."translations_jobs" CASCADE;
DROP TABLE IF EXISTS public."translations" CASCADE;
DROP TABLE IF EXISTS public."jobs" CASCADE;

CREATE TABLE statuses(
  id INT GENERATED ALWAYS AS IDENTITY,
  status TEXT NOT NULL,
  PRIMARY KEY(id),
	CONSTRAINT unique_status UNIQUE(status)
);

CREATE TABLE locales(
  id INT GENERATED ALWAYS AS IDENTITY,
  locale TEXT NOT NULL,
  CONSTRAINT unique_locale UNIQUE(locale)
  -- add country code / doc language column
);

CREATE TABLE translations(
  id INT GENERATED ALWAYS AS IDENTITY,
  slug TEXT NOT NULL,
  status TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL,
  date_modified TIMESTAMP NOT NULL,
	locale TEXT NOT NULL,
  PRIMARY KEY(id),
  -- pr number
  CONSTRAINT fk_locale
    FOREIGN KEY(locale)
      REFERENCES locales(locale),
CONSTRAINT fk_status
    FOREIGN KEY(status)
      REFERENCES statuses(status)
);

CREATE TABLE jobs(
  id INT GENERATED ALWAYS AS IDENTITY,
  job_uid TEXT NOT NULL,
  batch_uid TEXT,
  status TEXT NOT NULL,
  locale TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL,
  date_modified TIMESTAMP NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT fk_status
    FOREIGN KEY(status)
      REFERENCES statuses(status),
  CONSTRAINT fk_locale
    FOREIGN KEY(locale)
      REFERENCES locales(locale)
);

CREATE TABLE translations_jobs(
  translation_id INT,
  job_id INT,
  CONSTRAINT fk_translation_id
    FOREIGN KEY(translation_id)
      REFERENCES translations(id) ON DELETE CASCADE,
  CONSTRAINT FK_JOB_ID
    FOREIGN KEY(job_id)
      REFERENCES jobs(id) ON DELETE CASCADE,
  PRIMARY KEY(translation_id, job_id)
    -- on deletion of job, probably remove record
);

INSERT into statuses (status) VALUES 
  ('PENDING'),
  ('IN_PROGRESS'),
  ('IN_REVIEW'),
  ('COMPLETED'),
  ('ERRORED');

INSERT into locales (locale) VALUES
  ('ja-JP');
