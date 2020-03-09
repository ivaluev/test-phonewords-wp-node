import { callApi, delay } from "src/client/utils/http"

export async function getPhonewords(value: string): Promise<string[]> {
  
  const [delayed, result] = await Promise.all([delay(1300), callApi("GET", `/api/phonewords?term=${value}`)]);

  return result as string[]
}
