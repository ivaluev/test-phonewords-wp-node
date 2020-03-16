import React from "react"

export interface Props {
  text?: string
}

// TODO Apply styling
export default function NotFound({ text }: Props) {
  return <div><span data-testid="NotFound">{text || "Not Found"}</span></div>
}