import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.enum(['under5k', '5k-15k', '15k-50k', '50k+', 'not-sure']).optional(),
  message: z.string().min(10),
  dsgvo: z.literal(true),
})

export type ContactFormData = z.infer<typeof contactSchema>
