import React from 'react';
import { format, parseISO } from 'date-fns';
import { ja, ko } from 'date-fns/locale';
import { useStaticQuery, graphql } from 'gatsby';
import { compareVersions } from 'compare-versions';
import getAgentName from '../utils/getAgentName.js';
import getEOLDate from '../utils/getEOLDate.js';

const releaseNotesQuery = graphql`
  query {
    allMdx(
      filter: {
        fileAbsolutePath: {
          regex: "/src/content/docs/release-notes/.*(?<!index).mdx/"
        }
      }
    ) {
      nodes {
        frontmatter {
          releaseDate
          subject
          version
        }
      }
    }
  }
`;

const EolPage = ({ agent, locale = 'en' }) => {
  const { allMdx } = useStaticQuery(releaseNotesQuery);
  const releaseNotesJson = allMdx.nodes.map((note) => {
    return {
      agent: getAgentName(note.frontmatter.subject),
      date: note.frontmatter.releaseDate,
      eolDate: getEOLDate(note.frontmatter.releaseDate),
      version: note.frontmatter.version,
    };
  });

  const sortDateDesc = (a, b) => {
    const aDate = parseISO(a.date);
    const bDate = parseISO(b.date);

    if (aDate < bDate) {
      return 1;
    } else if (aDate > bDate) {
      return -1;
    } else {
      compareVersions(b.version, a.version);
    }
  };

  // Decided to include two different locales (ja || jp)
  // to match our file structure
  const formatDate = (date, locale) => {
    const iso = parseISO(date);
    if (locale === 'ja' || locale === 'jp') {
      return format(iso, 'PPP', { locale: ja });
    }
    if (locale === 'ko' || locale === 'kr') {
      return format(iso, 'PPP', { locale: ko });
    }
    return format(iso, 'PP');
  };

  const table = releaseNotesJson
    .filter((note) => note.agent === agent)
    .sort(sortDateDesc);

  return (
    <tbody>
      {table.map((note) => {
        return (
          // Some release notes have the same version but diff dates
          <tr key={note.date + note.version}>
            <td>v{note.version}</td>
            <td>{formatDate(note.date, locale)}</td>
            <td>{formatDate(note.eolDate, locale)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default EolPage;
