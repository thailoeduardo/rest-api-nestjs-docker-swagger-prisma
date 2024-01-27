// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const user1 = await prisma.users.upsert({
    where: { email: 'user1@email.com' },
    update: {},
    create: {
      name: 'User 1',
			phone: "(00) 0 0000-00000",
			email: "user1@email.com"
    }
  });

  const user2 = await prisma.users.upsert({
    where: { email: 'user2@email.com' },
    update: {},
    create: {
      name: 'User 2',
			phone: "(00) 0 0000-00000",
			email: "user2@email.com"
    }
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });