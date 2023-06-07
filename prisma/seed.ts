import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { people } from "../src/utils/constants";

const loadPeople = async () => {
  try {
    console.log("Let's seed it");
    await prisma.person.createMany({
      data: people,
    });
    console.log("Finished");
  } catch (error) {
    console.log(error);
  }
};

loadPeople();
