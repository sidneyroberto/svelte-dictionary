<script lang="ts">
  import { useLocation, navigate } from 'svelte-navigator'

  import { title, regularItalic } from '../../globalStyles'
  import type { Word } from '../../models/Word'
  import {
    audioPlayer,
    backButton,
    detailsContainer,
    detailsList,
    detailsMetadata,
    detailsPanel,
    detailsPanelTitle,
    detailsTitle,
  } from './styles'

  type Location = {
    state: {
      word: Word
    }
  }

  const location = useLocation()
  const { state } = $location as unknown as Location
  const { word } = state
  console.log(word)
</script>

<div class={detailsContainer}>
  <h1 class="{detailsTitle} {title}">Significados de {word.term}</h1>

  <div class={detailsPanel}>
    <h2 class="{detailsPanelTitle} {title}">Significados</h2>
    <ul class={detailsList}>
      {#each word.meanings as m}
        <li class="{detailsMetadata} {regularItalic}">{m}</li>
      {/each}
    </ul>
  </div>

  {#if word.audioUrls.length > 0}
    <div class={detailsPanel}>
      <h2 class="{detailsPanelTitle} {title}">Áudios de Pronúncia</h2>
      <ul class={detailsList}>
        {#each word.audioUrls as a}
          <audio class={audioPlayer} controls>
            <source src={a} />
          </audio>
        {/each}
      </ul>
    </div>
  {/if}

  <button class="{backButton} {title}" on:click={() => navigate(-1)}>
    Voltar
  </button>
</div>
