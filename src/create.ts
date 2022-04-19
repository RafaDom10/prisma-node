import { prisma } from "./prisma"

function main() {
  prisma.courses.create({
    data: {
      duration: 200,
      name: "C#",
      description: "Curso de C#"
    }
  }).then( result => {

    console.log(result)
  })  
}

main()