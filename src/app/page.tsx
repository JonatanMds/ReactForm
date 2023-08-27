"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import logo from '../../public/riot-games2233.jpg'
import { Input } from '@/component/input'

const createUserFormSchema = z.object({
  name: z.string().nonempty('Campo obrigatório'),
  email: z.string().nonempty('Email necessário').email('Formato do email é inválido'),
  password: z.string().min(8,'Necessário o use de mais de 8 caracteres'),
  date: z.string().nonempty('campo de data necessária')
})

type createUserFormData = z.infer<typeof createUserFormSchema>

export default function Home() {

  const {register, handleSubmit, formState:{errors}} = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  function infosForm(data: createUserFormData){
    console.log(JSON.stringify(data,null))
  }

  return (
    <main className="flex min-h-screen text-[#B1B1B1]">
      <section className="flex flex-col items-center justify-around bg-white px-[90px] py-[55px]">
        <Image 
          src={logo}
          style={{
            width: '200px',
            height: 'auto',
          }}
          alt=''
        />
        <form onSubmit={handleSubmit(infosForm)}>
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-6 text-black text-center text-xl">Criar Conta</legend>
            <Input
              type = "text"
              placeholder='Nome completo'
              {...register('name')}
              helperText = {errors.name && errors.name.message}
            />
            <Input
              type = "email"
              placeholder='Email'
              {...register('email')}
              helperText = {errors.email && errors.email.message}
            />
           <Input
              type = "password"
              placeholder='Senha'
              {...register('password')}
              helperText = {errors?.password?.message}
            />
            <Input
              className="w-full rounded p-2 bg-[#ECECEC]"
              type = "date"
              placeholder='Data de nascimento'
              {...register('date')}
              helperText = {errors?.date?.message}
            />
            <button type="submit" className="p-2 border rounded hover:bg-[#d13739] hover:text-white hover:border-white">Next</button>
          </fieldset>
        </form>
      </section>
      <section 
      className="w-full bg-[url('https://news.xbox.com/fr-fr/wp-content/uploads/sites/5/XGP-Riot-Games_Super-Hero-1400_1920x1080_JPG-58162c0620f40e5f235d.jpg')] bg-cover"
      >
      </section>
    </main>
  )
}
