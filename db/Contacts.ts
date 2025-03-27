import { MongoClient } from 'mongodb';
import { ContactDB } from "../types.ts";

export type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const url = Deno.env.get('MONGO_URL');
if (!url) {
  throw new Error('MONGO_URL not set');
}

const client = new MongoClient(url);
await client.connect();

const db = client.db('contactos');
const ContactsCollection = db.collection<ContactDB>('contacts');

export default ContactsCollection;