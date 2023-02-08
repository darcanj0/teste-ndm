import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const user: Prisma.userCreateInput = {
  email: 'any_email@gmail.com',
  password: '$2y$10$rJH24mkh7LDf10Xc5WSHjuV58bhQSP4evOl/yahD9ri.jVn15v5d.',
};

(async () => {
  await prisma.user.upsert({
    where: {
      email: user.email,
    },
    create: {
      email: user.email,
      password: user.password,
    },
    update: {},
  });
})()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
