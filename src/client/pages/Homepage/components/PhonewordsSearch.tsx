import React, { useState } from "react"
import { isEmpty } from "validator"
import { InputBase, IconButton } from "@material-ui/core"
import { Search as SearchIcon, Clear as ClearIcon } from "@material-ui/icons"
import styled from "src/client/theme/index"

const Container = styled.div`
  margin: 10px;
`

const StyledInputBase: any = styled(InputBase)`
  width: calc(100% - 48px);
  input[type=number] {
    appearance: textfield;
  }
`

const InputContainer: any = styled.div`
  display: flex;
  padding: 5px 10px 5px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 2px;
`

interface IProps {
  onSearch: (value: string) => void;
  onReset: () => void;
}

export default function PhonewordsSearch({ onSearch, onReset }: IProps) {
  const [search, setSearch] = useState("")

  const buttonClick = () => {
    !isEmpty(search) ? handleReset() : onSearch(search)
  }
  
  const handleReset = () => {
    setSearch("");
    onReset()
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
     setSearch(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <StyledInputBase
              id="search"
              type="number"
              value={search}
              onChange={handleChange}
              fullWidth={true}
              placeholder="Try 459 for example"
              autoComplete="off"
              className=""
            />
            <IconButton onClick={buttonClick}>
              {!isEmpty(search) ? (
                <ClearIcon width={48} height={48} />
              ) : (
                  <SearchIcon width={48} height={48} />
                )}
            </IconButton>
          </InputContainer>
        </form>
    </Container>
  )
}

