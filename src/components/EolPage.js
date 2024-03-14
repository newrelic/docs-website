import React from 'react';
import { format, isAfter, isSameDay, parseISO } from 'date-fns';
import { ja, ko, es, ptBR } from 'date-fns/locale';
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
        fileAbsolutePath
        frontmatter {
          releaseDate
          eolDate
          version
        }
      }
    }
  }
`;

const EolPage = ({ agent, locale = 'en' }) => {
  const { allMdx } = useStaticQuery(releaseNotesQuery);
  const releaseNotes = allMdx.nodes
    .filter((note) => getAgentName(note.fileAbsolutePath) === agent)
    .map((note) => ({
      date: parseISO(note.frontmatter.releaseDate),
      eolDate: parseISO(
        note.frontmatter.eolDate ?? getEOLDate(note.frontmatter.releaseDate)
      ),
      version: note.frontmatter.version,
    }));

  const sortDateDesc = (a, b) => {
    if (isSameDay(a.date, b.date)) {
      compareVersions(a.version, b.version);
    }

    if (a.date < b.date) {
      return 1;
    } else return -1;
  };

  // Decided to include two different locales (ja || jp)
  // to match our file structure
  const formatDate = (date, locale) => {
    if (locale === 'ja' || locale === 'jp') {
      return format(date, 'PPP', { locale: ja });
    }
    if (locale === 'ko' || locale === 'kr') {
      return format(date, 'PPP', { locale: ko });
    }
    // these use the language code
    if (locale === 'es') {
      return format(date, 'PPP', { locale: es });
    }
    if (locale === 'pt') {
      return format(date, 'PPP', { locale: ptBR });
    }
    return format(date, 'PP');
  };

  const isSupportedVersion = (eolDate) => {
    return isAfter(eolDate, new Date());
  };

  const table = releaseNotes
    .filter((note) => isSupportedVersion(note.eolDate))
    .sort(sortDateDesc);

  return (
    <tbody>
      {table.map((note) => {
        return (
          // Some release notes have the same date but diff versions
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
