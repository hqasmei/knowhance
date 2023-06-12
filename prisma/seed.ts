import { PrismaClient } from "@prisma/client";
import { people } from "../src/lib/constants";

const prisma = new PrismaClient();

const insertData = async () => {
  try {
    for (const item of people) {
      const existingPerson = await prisma.person.findFirst({
        where: {
          name: item.name,
        },
      });

      if (!existingPerson) {
        const post = await prisma.person.create({
          data: {
            name: item.name,
            image: item.image,
            bio: item.bio,
            areasOfExpertise: item.areasOfExpertise,
            works: {
              create: item.works.map((work) => ({
                title: work.title,
                description: work.description,
                medium: work.medium,
                url: work.url,
              })),
            },
            contactInformation: {
              website: item.contactInformation.website,
              twitter: item.contactInformation.twitter,
            },
          },
        });

        console.log("Data inserted successfully:", post);
      } else {
        const updatedPerson = await prisma.person.update({
          where: {
            id: existingPerson.id,
          },
          data: {
            image: item.image,
            bio: item.bio,
            areasOfExpertise: item.areasOfExpertise,
            works: {
              deleteMany: {}, // Delete all existing works
              create: item.works.map((work) => ({
                title: work.title,
                description: work.description,
                medium: work.medium,
                url: work.url,
              })),
            },
            contactInformation: {
              website: item.contactInformation.website,
              twitter: item.contactInformation.twitter,
            },
          },
        });

        console.log("Person updated successfully:", updatedPerson);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

insertData();
