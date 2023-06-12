import prisma from "@/lib/prisma";

export async function getAllPeople() {
  try {
    const people = await prisma.person.findMany();
    return { people };
  } catch (error: any) {
    throw new Error(error);
  }
}
