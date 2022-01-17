import { CONTACTS } from './utils/ContactsAPI';
import ListContacts from './ListContacts';

function App() {
  return (
    <div className="App">
      <ListContacts contacts={CONTACTS} />
    </div>
  );
}

export default App;
