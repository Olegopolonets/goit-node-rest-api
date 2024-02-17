import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getContactById = async (id) => {
  return Contact.findById(id);
};

export const addContact = async (data) => Contact.create(data);

export const removeContact = async (id) => Contact.findByIdAndDelete(id);

export const updateContactById = async (id, data) =>
  Contact.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const updateStatusContact = async (id, data) =>
  Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
