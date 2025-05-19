import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidartor Adapter', () => {
  test('Shoud returns false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
