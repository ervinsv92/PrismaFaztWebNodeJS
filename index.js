import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient()

async function main(){
    // const newUser = await prisma.user.create({
    //     data:{
    //         name:"Carmen",
    //         email:"carmen@correo.com"
    //     }
    // })

    // console.log(newUser)

    // //es un array normal
    // const users = await prisma.user.findMany();
    // console.log(users)

    // const user = await prisma.user.findFirst({
    //     where:{
    //         id: 2,
    //         name:'Mario'
    //     }
    // });

    // const user = await prisma.user.findFirst({
    //     where:{
    //         OR:[{id: 1},{name:'Carmen'}]
    //     }
    // });

    // console.log(user)

    // try {
    //     const user = await prisma.user.delete({
    //         where:{
    //             id:1
    //         }
    //     })
    
    //     console.log(user)    
    // } catch (error) {
    //     console.log(error.meta.cause)
    // }

//actualiza un solo registro, por eso el filtro debe ser el id o algo unico
//    const userUpdated = await prisma.user.update({
//         where:{id:2},
//         data:{
//             lastName:'Solano'
//         }
//     })

//     console.log(userUpdated)

 
// //actualiza varios registros, el filtro lo pueden tener varios datos
//    const result = await prisma.user.updateMany({
//         where:{lastName:null},
//         data:{
//             lastName:'Solano'
//         }
//     })
//     console.log(result)
//        //es un array normal
//     const users = await prisma.user.findMany();
//     console.log(users)  

const user = await prisma.user.upsert({
    where:{name:'Ervin'},
    create:{
        email:'pepe@correo.com',
        name:'Pepe'
    },
    update:{
        lastName:'Jimenez'
    }
})

console.log(user)
}

//de igual manera hay deleteMany

main();