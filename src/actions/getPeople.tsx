import { prisma } from "../utils/prisma";

export default async function getPeople() {
  try {
    const people = await prisma.person.findMany();

    return people;
  } catch (error: any) {
    throw new Error(error);
  }
}
