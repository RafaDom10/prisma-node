import { prisma } from "./prisma";

function main() {
  prisma.courses.findFirst().then( result => {
    console.log(result)
  })
}

main()