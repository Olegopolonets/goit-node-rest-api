import * as contactsService from "../services/contactsServices.js";

import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, `Food with id=${id} not found`);
  }
  res.json(result);
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};

export default {
  getAllContacts,
  getOneContact,
};
