import { writable } from 'svelte/store'
import type { Word } from '../models/Word'

export let wordsFound = writable<Word[]>([])
