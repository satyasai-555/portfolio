import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const explicitOrigins = [
    'http://localhost:3000',
    'https://satyasai.dev',
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
  ]

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true)
      // Allow explicitly listed origins
      if (explicitOrigins.includes(origin)) return callback(null, true)
      // Allow any Vercel preview deployment for this project
      if (origin.endsWith('.vercel.app')) return callback(null, true)
      callback(new Error(`CORS: origin ${origin} not allowed`))
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  const port = process.env.PORT ?? 3001
  await app.listen(port)
  console.log(`Backend running on http://localhost:${port}`)
}

bootstrap()
