
import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { Jwt } from "hono/utils/jwt";
import { signinInput, signupInput } from "@krishna513/common-app";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	}
}>();
userRouter.post("/signup", async(c)=>{
    const signupBody = await c.req.json();
    const {success} = signupInput.safeParse(signupBody);
    if(!success){
        return c.json({msg: "wrong signup input"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    // const existingUser = await prisma.user.findFirst({
    //     where: {
    //         email: signupBody.email
    //     }
    // })
    // if(existingUser){
    //     return c.json({msg: "email already registered please signin"})
    // }

    const res = await prisma.user.create({
        data: {
            name : signupBody.name,
            password : signupBody.password,
            email : signupBody.email,
        }
    })
    return c.json({
        msg: "user created",
        id: res.id
     })
})

userRouter.post("/signin", async(c)=>{
    const signinBody = await c.req.json();
    const {success} = signinInput.safeParse(signinBody);
    if(!success){
        return c.json({msg: "wrong signin input"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const jwt_secret = c.env?.JWT_SECRET;
    
    const res = await prisma.user.findFirst({
        where: {
            email : signinBody.email,
            password : signinBody.password
        },
        select: {
            name: true,
            id: true
        }
    })
    if (!res){
        return c.json({msg: "user doesn't exist"})
    }
    const userId = res.id
    const token = await Jwt.sign(userId, jwt_secret)
    return c.json({
        msg: "welcome",
        token: token,
        name: res.name 
     })
})

