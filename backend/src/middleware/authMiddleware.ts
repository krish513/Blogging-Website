import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export async function authMiddleware(c:any, next:Next){
    const jwt_secret: string = c.env.JWT_SECRET;
    console.log("jwt secret "+jwt_secret)
    const authHeader = c.req.header("Authorization");
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return c.json({msg: "Authentication failed"})
    }
    const token = authHeader.split(" ")[1];
    const decode = await Jwt.verify(token,jwt_secret);
    // c.set("userId", decode.id);
    console.log(token)
    console.log(decode)
    c.set("userId", decode)
    await next();
}