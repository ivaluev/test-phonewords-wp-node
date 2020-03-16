const words = ["eewew", "efwefefew"]

export function getPhonewords(value: string): Promise<string[]> {
  return new Promise((res, rej) => {
    process.nextTick(() => {
      res(words)
    })
  })
}