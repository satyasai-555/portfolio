import { Injectable, Logger } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import * as nodemailer from 'nodemailer'

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)

  async submit(dto: CreateContactDto): Promise<void> {
    this.logger.log(`New contact form submission from ${dto.name} <${dto.email}>`)

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const mailTo = process.env.MAIL_TO

    if (!smtpUser || !smtpPass || !mailTo) {
      this.logger.warn('SMTP not configured — message logged below')
      this.logger.log(`From: ${dto.name} <${dto.email}>\n\n${dto.message}`)
      return
    }

    // Return to browser immediately — send email in background
    this.sendEmail(smtpUser, smtpPass, mailTo, dto)
  }

  private sendEmail(
    smtpUser: string,
    smtpPass: string,
    mailTo: string,
    dto: CreateContactDto,
  ): void {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
      connectionTimeout: 10_000,
      greetingTimeout: 8_000,
      socketTimeout: 10_000,
    })

    transporter
      .sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: mailTo,
        replyTo: dto.email,
        subject: `Portfolio enquiry from ${dto.name}`,
        text: `Name: ${dto.name}\nEmail: ${dto.email}\n\n${dto.message}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;padding:24px">
            <h2 style="margin:0 0 16px;font-size:18px">New portfolio enquiry</h2>
            <p style="margin:0 0 4px"><strong>Name:</strong> ${dto.name}</p>
            <p style="margin:0 0 16px"><strong>Email:</strong>
              <a href="mailto:${dto.email}">${dto.email}</a>
            </p>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 16px"/>
            <p style="white-space:pre-wrap;margin:0">${dto.message}</p>
          </div>
        `,
      })
      .then(() => this.logger.log(`Email delivered to ${mailTo}`))
      .catch((err: Error) => {
        this.logger.error(`SMTP error: ${err.message}`)
        this.logger.log(`Message content — ${dto.name} <${dto.email}>:\n${dto.message}`)
      })
  }
}
