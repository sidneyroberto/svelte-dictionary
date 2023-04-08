import axios, { type AxiosInstance } from 'axios'

import { type Word, type WordNotFound, getWords } from '../models/Word'

export class WordService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })
  }

  async findWords(term: string): Promise<WordNotFound | Word[]> {
    const response = await this._http.get(`/${term.toLowerCase().trim()}`, {
      validateStatus: (status) => status < 500,
    })
    const result = getWords(response.data)
    return result
  }
}
