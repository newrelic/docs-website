import { useContext } from 'react';
import ViewToggleContext from '@newrelic/gatsby-theme-newrelic/src/components/Context';

const useViewToggleContext = () => useContext(ViewToggleContext);

export default useViewToggleContext;
