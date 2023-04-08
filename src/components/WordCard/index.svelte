<script lang="ts">
  import { Link } from 'svelte-navigator'

  import type { Word } from '../../models/Word'
  import {
    wordCardPanel,
    wordDetailsLink,
    wordDetailsText,
    wordTitle,
  } from './styles'
  import { regularItalic, title } from '../../globalStyles'

  export let order: number
  export let word: Word
  const { audioUrls, meanings, term } = word
  const detailsText = `${meanings.length} significado(s) e ${audioUrls.length} áudio(s) de pronúncia`
</script>

<div class={wordCardPanel}>
  <h1 class="{wordTitle} {title}">{`${order} - ${term}`}</h1>
  <Link to="/details" class={wordDetailsLink} state={{ word }}>
    <span class="{wordDetailsText} {regularItalic}">{detailsText}</span>
  </Link>
</div>
