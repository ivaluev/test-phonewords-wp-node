import React from "react"

export interface Props {
  text?: string
}

// TODO Apply styling
export default function NotFound({ text }: Props) {
  return <div data-testid="not-found-form">{text || "Not Found"}</div>
}