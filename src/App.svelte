<script lang="ts">
  import { Route, Router } from 'svelte-navigator'
  import '@fontsource/montserrat'
  import '@fontsource/montserrat/700.css'
  import '@fontsource/montserrat/400-italic.css'

  import Home from './pages/Home/index.svelte'
  import Details from './pages/Details/index.svelte'
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/details" component={Details} />
</Router>
