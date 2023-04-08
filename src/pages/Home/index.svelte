<script lang="ts">
  import { Clock } from 'svelte-loading-spinners'

  import { title, regular } from '../../globalStyles'
  import { type Word, isInstanceOfWordNotFound } from '../../models/Word'
  import { WordService } from '../../services/WordService'
  import {
    filterInput,
    homeContainer,
    searchButton,
    searchPanel,
  } from './styles'
  import WordCard from '../../components/WordCard/index.svelte'
  import { wordsFound } from '../../store/words'

  let filter = ''
  let isSearching = false
  let noWordFound = false
  const loadAnimationColor = '#392e4a'
  let words: Word[] = []
  wordsFound.subscribe((value) => (words = value))

  const wordService = new WordService()

  const searchWords = async () => {
    if (filter) {
      isSearching = true
      noWordFound = false
      wordsFound.set([])

      const response = await wordService.findWords(filter)
      if (isInstanceOfWordNotFound(response)) {
        noWordFound = true
      } else {
        wordsFound.set(response)
        filter = ''
      }

      isSearching = false
    }
  }
</script>

<div class={homeContainer}>
  <div class={searchPanel}>
    <input type="text" class="{filterInput} {regular}" bind:value={filter} />
    <input
      class="{searchButton} {title}"
      type="button"
      value="Buscar"
      disabled={isSearching}
      on:click={searchWords}
    />
  </div>

  {#if isSearching}
    <Clock size="60" color={loadAnimationColor} unit="px" />
  {/if}

  {#if !isSearching && words.length > 0}
    {#each words as w, i}
      <WordCard order={i + 1} word={w} />
    {/each}
  {/if}

  {#if !isSearching && noWordFound}
    <span class={title}>Nenhuma palavra encontrada</span>
  {/if}
</div>
