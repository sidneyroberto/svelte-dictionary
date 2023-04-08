import { css } from '@emotion/css'

export const homeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
`

export const searchPanel = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const filterInput = css`
  width: 400px;
  height: 35px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  border: 2px solid #aaa;
  margin-right: 10px;
`

export const searchButton = css`
  background-color: #392e4a;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 150px;
`

export const resultsFoundMessage = css`
  font-size: 15px;
  margin-bottom: 10px;
`
