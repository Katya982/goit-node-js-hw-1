import yargs from 'yargs';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts().then(allContacts => {
        console.log('All Contacts:', allContacts);
      });
      break;

    case 'get':
      getContactById(id).then(contactById => {
        console.log('Contact by ID:', contactById);
      });
      break;

    case 'add':
      addContact(name, email, phone).then(newContact => {
        console.log('New Contact:', newContact);
      });
      break;

    case 'remove':
      removeContact(id).then(removedContact => {
        console.log('Removed Contact:', removedContact);
      });
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const argv = yargs(process.argv.slice(2)).argv;
invokeAction(argv);
