
// import {Form }from './components/Form'
import ContextProvider from './context';
import Router from './routes/routes'
function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>

    </>


  );
}

export default App;
