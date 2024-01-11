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

// const user = await prisma.user.upsert({
//     where:{name:'Ervin'},
//     create:{
//         email:'pepe@correo.com',
//         name:'Pepe'
//     },
//     update:{
//         lastName:'Jimenez'
//     }
// })

// console.log(user)

//Crear usuario con post
    // const newUser = await prisma.user.create({
    //     data:{
    //         name:"Jose",
    //         email: "josecorreo@correo1.com"
    //     }
    // })

    // console.log(newUser)

    // const newPost = await prisma.post.create({
    //     data:{
    //         title:'mi primer publicacion',
    //         content:'este es un contenido',
    //         authorId: newUser.id//,
    //         // author:{
    //         //     connect:{
    //         //         id:newUser.id
    //         //     }
    //         // }
    //     }
    // })

    // console.log(newPost)
    // const newUser = await prisma.user.create({
    //     data:{
    //         name:"Juan",
    //         email:'juan@correo.com',
    //         posts:{
    //             create:{
    //                 title:'tuto',
    //                 content:'hola...'
    //             }
    //         }
    //     }
    // })

    // console.log(newUser)

    // const posts = await prisma.post.findMany();
    // console.log(posts)

    const users = await prisma.user.findMany({
        include:{
            posts:true
        }
    })

    console.log(users)
}

//de igual manera hay deleteMany

main();