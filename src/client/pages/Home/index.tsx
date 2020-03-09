import React, { useState } from "react"
import { getPhonewords } from "src/client/api/phonewords"
import { Container } from "src/client/components/Container"
import { NoResults } from "src/client/components/NoResults"
import T from "src/client/components/Translate"
import PhonewordsCloud from "./components/PhonewordsCloud"
import PhonewordsSearch from "./components/PhonewordsSearch"
import PhonewordsErrorBar from "./components/PhonewordsErrorBar"
import { usePagination } from "src/client/utils/hooks/usePagination"
import { LoadMore } from "./components/LoadMore"
import { Backdrop, CircularProgress } from "@material-ui/core"
import { BackdropProps } from "@material-ui/core/Backdrop"
import styled from "styled-components"
import validator from "validator"

export default function Home() {
  const [words, setWords] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    paginatedData,
    isDataToPaginate,
    isFirstPage,
    isLastPage,
    onPaginateNext,
    onPaginatePrev,
  } = usePagination<string>({
    data: words,
    recordsPerPage: 100,
  })

  async function handleSearch(value: string) {
    if (!value) {
      setWords([])
      setError("")
      return
    }

    setLoading(true)

    try {
      if (!validator.isInt(value)) {
        throw new Error("Only digits are supported")  
      }
      if (value.includes("0") || value.includes("1")) {
        throw new Error("Digits 0 and 1 are forbidden")
      }
      if (value.length > 10) {
        // we dont want to hang the app
        throw new Error("Numbers of more then 10 digits are forbidden")
      }

      const phoneWords = await getPhonewords(value)
      setWords(phoneWords)
      setError("")
    } catch (error) {
      setError(error.message)
      setWords([])
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setWords([]);
  }

  function nextPage() {
    throw new Error("Not Implemented")
  }

  return (
    <div>
      <PhonewordsSearch onSearch={handleSearch} onReset={handleReset} />
      {error && <PhonewordsErrorBar>{error}</PhonewordsErrorBar>}
      {!error && !loading && paginatedData.length === 0 && (
        <NoResults><T>Try entering numbers into a search box!</T></NoResults>
      )}
      {!error && !loading && paginatedData.length > 0 && (
        <Container>
          <PhonewordsCloud items={paginatedData} />
          {!isLastPage && <LoadMore onClick={onPaginateNext} />}
        </Container>
      )}
      <BackdropStyled open={loading}>
        <CircularProgress color="inherit" />
      </BackdropStyled>
    </div>
  );
}

const BackdropStyled = styled<BackdropProps>(Backdrop)`
  z-index: 1300 !important;
  color: #fff !important;
`