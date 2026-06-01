import { Injectable, Logger } from '@nestjs/common'
import { Resend } from 'resend'
import { CreateContactDto } from './dto/create-contact.dto'

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)
  private readonly resend: Resend | null

  constructor() {
    this.resend = process.env.RESEND_API_KEY
      ? new Resend(process.env.RESEND_API_KEY)
      : null
  }

  async submit(dto: CreateContactDto): Promise<void> {
    this.logger.log(`New submission from ${dto.name} <${dto.email}>`)

    const mailTo = process.env.MAIL_TO

    if (!this.resend || !mailTo) {
      this.logger.warn('RESEND_API_KEY or MAIL_TO not set — logging to console')
      this.logger.log(`Name: ${dto.name}\nEmail: ${dto.email}\n\n${dto.message}`)
      return
    }

    // Return to browser immediately, deliver email in background
    this.send(mailTo, dto)
  }

  private send(mailTo: string, dto: CreateContactDto): void {
    this.resend!.emails
      .send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: mailTo,
        replyTo: dto.email,
        subject: `Portfolio enquiry from ${dto.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;padding:24px;color:#111">
            <h2 style="margin:0 0 16px;font-size:18px;color:#111">
              New portfolio enquiry
            </h2>
            <p style="margin:0 0 6px">
              <strong>Name:</strong> ${dto.name}
            </p>
            <p style="margin:0 0 20px">
              <strong>Email:</strong>
              <a href="mailto:${dto.email}" style="color:#3b82f6">${dto.email}</a>
            </p>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 20px"/>
            <p style="margin:0;white-space:pre-wrap;line-height:1.6">${dto.message}</p>
          </div>
        `,
      })
      .then(({ data, error }) => {
        if (error) {
          this.logger.error(`Resend error: ${error.message}`)
          this.logger.log(`Undelivered — ${dto.name} <${dto.email}>:\n${dto.message}`)
        } else {
          this.logger.log(`Email sent, id: ${data?.id}`)
        }
      })
      .catch((err: Error) => {
        this.logger.error(`Resend exception: ${err.message}`)
        this.logger.log(`Undelivered — ${dto.name} <${dto.email}>:\n${dto.message}`)
      })
  }
}
