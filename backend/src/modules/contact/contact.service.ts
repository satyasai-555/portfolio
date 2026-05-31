import { Injectable, Logger } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import * as nodemailer from 'nodemailer'

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)

  async submit(dto: CreateContactDto): Promise<void> {
    this.logger.log(`Contact form from ${dto.name} <${dto.email}>`)

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const mailTo = process.env.MAIL_TO

    if (!smtpUser || !smtpPass || !mailTo) {
      // Log to console in dev when SMTP is not configured
      this.logger.warn('SMTP not configured — logging message to console')
      this.logger.log(
        `From: ${dto.name} <${dto.email}>\n\n${dto.message}`,
      )
      return
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: mailTo,
      replyTo: dto.email,
      subject: `Portfolio message from ${dto.name}`,
      text: `Name: ${dto.name}\nEmail: ${dto.email}\n\n${dto.message}`,
      html: `
        <p><strong>Name:</strong> ${dto.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${dto.email}">${dto.email}</a></p>
        <hr />
        <p>${dto.message.replace(/\n/g, '<br />')}</p>
      `,
    })

    this.logger.log(`Email delivered to ${mailTo}`)
  }
}
