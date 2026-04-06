import { v4 as uuidv4 } from 'uuid';
import { getFirestore } from '../utils/firebase.js';

const db = getFirestore();

export async function createDocument<T extends { id: string }>(collection: string, data: Omit<T, 'id'>) {
  const id = uuidv4();
  const doc = { id, ...data } as unknown as T;
  await db.collection(collection).doc(id).set(doc);
  return doc;
}

export async function getCollection<T>(collection: string) {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map((doc) => doc.data() as T);
}

export async function getByField<T>(collection: string, field: string, value: string) {
  const snapshot = await db.collection(collection).where(field, '==', value).limit(1).get();
  return snapshot.docs[0]?.data() as T | undefined;
}

export async function upsertById<T>(collection: string, id: string, data: T) {
  await db.collection(collection).doc(id).set(data, { merge: true });
}

export async function getWhere<T>(collection: string, field: string, value: string) {
  const snapshot = await db.collection(collection).where(field, '==', value).get();
  return snapshot.docs.map((doc) => doc.data() as T);
}
