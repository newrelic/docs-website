import { useContext } from 'react';
import ViewToggleContext from '@newrelic/gatsby-theme-newrelic/src/components/Context';

const useViewToggleContext = () => useContext(ViewToggleContext);

console.log('toggle context', ViewToggleContext);

export default useViewToggleContext;
