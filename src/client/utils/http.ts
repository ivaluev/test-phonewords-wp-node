import config from "../config"

export const API_ENDPOINT = config.API_BASE

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function callApi(method: "GET" | "POST" | "PUT" | "PATCH", path?: string, data?: any) {
  const url = path ? `${API_ENDPOINT}${path}` : API_ENDPOINT

  let options: RequestInit

  if (data) {
    options = {
      method,
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }
  } else {
    options = {
      method,
      headers: {
        Accept: "application/json"
      }
    }
  }

  const res = await fetch(url, options)
  return res.json()
}


