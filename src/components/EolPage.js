import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ja, ko } from 'date-fns/locale';

const AGENT_RELEASE_NOTES_URL =
  'https://docs-assets.newrelic-external.com/release-notes-json';

const EolPage = ({ agent, locale = 'en' }) => {
  const [releaseNotes, setReleaseNotes] = useState([]);

  useEffect(async () => {
    const data = await fetch(AGENT_RELEASE_NOTES_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataJson = await data.json();
    setReleaseNotes(dataJson);
  }, []);

  const sortDateDesc = (a, b) => {
    const aDate = parseISO(a.date);
    const bDate = parseISO(b.date);

    if (aDate < bDate) {
      return 1;
    }
    if (aDate > bDate) {
      return -1;
    }
  };

  const formatDate = (date, locale) => {
    const iso = parseISO(date);
    if (locale === 'ja') {
      return format(iso, 'PPP', { locale: ja });
    }
    if (locale === 'ko') {
      return format(iso, 'PPP', { locale: ko });
    }
    return format(iso, 'PP');
  };

  if (releaseNotes.length > 0) {
    const table = releaseNotes
      .filter((note) => note.agent === agent)
      .sort(sortDateDesc);

    return (
      <tbody>
        {table.map((note) => {
          return (
            <tr>
              <td>v{note.version}</td>
              <td>{formatDate(note.date, locale)}</td>
              <td>{formatDate(note.eolDate, locale)}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  return null;
};

export default EolPage;
