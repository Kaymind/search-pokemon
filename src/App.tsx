import { HomePage } from './pages/HomePage';
import styled from 'styled-components'
// import './App.css';

interface AppProps {
  className?: string
}

function App({ className }: AppProps) {
  return (
    <div className={className}>
      <HomePage />
    </div>
  );
}

const StyledApp = styled(App)`
    max-width: 1200px;
    margin: 50px auto;
`


export { StyledApp as App};
