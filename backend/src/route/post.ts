
import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput } from "@krishna513/common-app";

export const postRouter = new Hono<{
    Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	},
    Variables: {
        userId: string
    }
}>();

postRouter.get("/", async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl : c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const allPost = await prisma.post.findMany();
        return c.json({allPosts : allPost})
    }
    catch(err){
        console.log("error aya h in get all post "+err)
    }
    
})

postRouter.post("/", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env?.DATABASE_URL
    }).$extends(withAccelerate())

    const userId = c.get("userId");
    const postBody = await c.req.json();
    const {success} = createPostInput.safeParse(postBody);

    if(!success){
        return c.json({msg: "Wrong post input"})
    }
    
    try{
        const post = await prisma.post.create({
            data: {
                title: postBody.title,
                content: postBody.content,
                authorId: userId
            }
        })
        return c.json({
            msg: "post created",
            id: post.id
        })
    }
    catch(err){
        console.log("error in post creation "+err )
    }
})

postRouter.put("/blog", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    const updateBody = await c.req.json();
    const userId = c.get("userId")
    try{
        const updatedPost = await prisma.post.update({
            where: {
                id: updateBody.id,
                authorId: userId,
            },
            data: {
                title: updateBody.title,
                content: updateBody.content
            }
        })
        return c.json({
            msg: "post updated", 
            id: updatedPost.id})
    }
    catch(err){
        console.log("error while updating post "+err)
    }
})

postRouter.put("/blog/publish", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());
    const updateBody = await c.req.json();
    try{
        const blog = await prisma.post.update({
            where: {
                id: updateBody.id
            },
            data: {
                published: true
            }
        })
        return c.json({blog})
    }
    catch(err){
        console.log("error in finding blog "+ err)
    }
    
})

postRouter.get("/blog/:id", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());
    const BlogId = c.req.param("id");
    try{
        const blog = await prisma.post.findUnique({
            where: {
                id: BlogId
            }
        })
        return c.json({blog})
    }
    catch(err){
        console.log("error in finding blog "+ err)
    }
    
})

