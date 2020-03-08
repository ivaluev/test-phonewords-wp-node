import React, { useState } from "react"
import { getPhonewords } from "src/client/api/phonewords"
import { Container } from "src/client/components/Container"
import { NoResults } from "src/client/components/NoResults"
import T from "src/client/components/Translate"
import PhonewordsCloud from "./components/PhonewordsCloud"
import PhonewordsSearch from "./components/PhonewordsSearch"
import PhonewordsErrorBar from "./components/PhonewordsErrorBar"

export default function Homepage() {
  const [words, setWords] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState("")

  async function handleSearch(value: string) {
    setLoading(true)

    try {
      const phoneWords = await getPhonewords(value)
      setWords(phoneWords)
    } catch (error) {
      setErrors(error)
      // TODO set error
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setWords([]);
  }

  return (
    <>
      <PhonewordsSearch onSearch={handleSearch} onReset={handleReset} />
      {errors && (
          <PhonewordsErrorBar>{errors}</PhonewordsErrorBar>
      )}
      {words && (
        <>
          {words.length === 0 ? (
            <NoResults><T>Try entering numbers into a search box!</T></NoResults>
          ) : (
              <Container>
                <PhonewordsCloud items={words} />
              </Container>
            )}
        </>
      )}
    </>
  );
}