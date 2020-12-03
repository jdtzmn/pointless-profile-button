import { PrismaClient } from '@prisma/client'

export default class Count {
  private static async getRow(prisma: PrismaClient) {
    return await prisma.count.findUnique({
      where: {
        static: 1,
      },
    })
  }

  static async get() {
    const prisma = new PrismaClient()
    await prisma.$connect()

    const countRow = await this.getRow(prisma)

    await prisma.$disconnect()
    return countRow.at
  }

  static async increment() {
    const prisma = new PrismaClient()
    await prisma.$connect()

    let countRow = await this.getRow(prisma)

    if (typeof countRow === 'undefined' || countRow === null) {
      // set initially
      countRow = await prisma.count.create({
        data: {
          static: 1,
          at: 1,
        },
      })
    } else {
      // or increment
      countRow = await prisma.count.update({
        where: { static: 1 },
        data: { at: countRow.at + 1 },
      })
    }

    await prisma.$disconnect()
    return countRow.at
  }
}
