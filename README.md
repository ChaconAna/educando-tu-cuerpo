This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Listado de alumnos

La ruta `/profesora/alumnos` requiere una profesora activa. Consulta los perfiles
con la sesión del usuario y las políticas RLS existentes. La columna `phone`
debe estar disponible mediante la migración existente que la agrega.

Para mostrar correos de Supabase Auth, configurá `SUPABASE_SERVICE_ROLE_KEY`
en `.env.local` y en las variables del servidor de despliegue. Usá la clave
`service_role` del mismo proyecto que `NEXT_PUBLIC_SUPABASE_URL`. No uses un
prefijo `NEXT_PUBLIC_` para esa clave, no la incluyas en el repositorio ni la
envíes al navegador. Reiniciá el servidor después de configurarla.

Si falta la clave o falla Auth, el listado conserva los demás datos y avisa
que los correos no están disponibles. No se realizan escrituras en Supabase.

Las pruebas usan datos simulados y no se conectan a Supabase:

```bash
node --test tests/students.test.mjs
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
