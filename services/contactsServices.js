import Contact from "../models/Contact.js";

function updateContacts(contacts) {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

export const listContacts = () => Contact.find();

export const getContactById = () => Contact.find();

export const addContact = async (data) => Contact.create(data);

// export async function getContactById(contactId) {
// const contacts = await listContacts();
// const result = contacts.find((item) => item.id === contactId);
// return result || null;
// }

export async function removeContact(contactId) {
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === contactId);
  // if (index === -1) {
  //   return null;
  // }
  // const [result] = contacts.splice(index, 1);
  // updateContacts(contacts);
  // return result;
}

export const updateContactById = async (id, data) => {
  // const contacts = await listContacts();
  // const index = contacts.findIndex((item) => item.id === id);
  // if (index === -1) {
  //   return null;
  // }
  // contacts[index] = { ...contacts[index], ...data };
  // updateContacts(contacts);
  // return contacts[index];
};
