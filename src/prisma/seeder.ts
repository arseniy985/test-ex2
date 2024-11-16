import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/ru';

const prisma = new PrismaClient();

const main = async () => {
  const users = Array.from({ length: 1000000 }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: Math.floor(Math.random() * 100) + 1,
    gender: Math.random() > 0.5 ? 'male' : 'female',
    hasIssues: Math.random() > 0.5,
  }));

  for (let i = 0; i < users.length; i += 10000) {
    await prisma.user.createMany({
      data: users.slice(i, i + 10000),
    });
    console.log(`Inserted ${i + 10000} users`);
  }

  console.log('Database seeding completed.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
