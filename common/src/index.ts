import z from 'zod';

const signupSchema = z.object({
   name: z.string().min(2).max(255),
   username: z.string().email(),
   password: z.string().min(6)
})




const signinSchema = z.object({
    name: z.string().min(2).max(255),
    username: z.string().email(),
    password: z.string().min(6)
 })
 

 
export const createBlogInput= z.object({
    title: z.string(),
    content: z.string()
})




export const updateBlogInput= z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})


export type SignUpInput = z.infer<typeof signupSchema>
export type SignInInput = z.infer<typeof signinSchema>
export type  CreateBlogInput= z.infer<typeof createBlogInput>
export type  UpdateBlogInput= z.infer<typeof updateBlogInput>

 