import { callApi, delay } from "src/client/utils/http"

export async function getPhonewords(value: string): Promise<string[]> {
  
  await delay(1500)

  const result = await callApi("GET", `/api/phonewords?term=${value}`)

  return result
}