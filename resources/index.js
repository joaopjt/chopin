import nodemailer from 'nodemailer';

export default class Chopin {
  constructor(config) {
    this.config = config;

    this.client = nodemailer.createTransport(config);
  }

  async send(mail) {
    const result = await this.client.sendMail(mail);

    return result;
  }
}