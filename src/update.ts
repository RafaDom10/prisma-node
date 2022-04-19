import { prisma } from "./prisma";

function main() {
  prisma.courses.update({
    where: {
      id: "ce56ed1c-92e1-4f56-9ce8-823d73557fd9"
    },
    data: {
      duration: 50,
      name: "React.JS",
      description: "Curso de React"
    }
  }).then( result => {
    console.log(result)
  })
}

main()