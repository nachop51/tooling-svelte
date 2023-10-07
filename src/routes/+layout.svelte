<script lang="ts">
  import { onMount } from 'svelte'
  import '../app.css'

  onMount(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    }
  })

  function setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
</script>

<div
  class="bg-base-100 text-base-content sticky top-0 z-30 transition-all duration-100 shadow-sm backdrop-blur bg-opacity-80"
>
  <nav class="navbar w-full">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/tools">Tools</a></li>
        <li>
          <details class="w-full">
            <summary>Theme</summary>
            <ul class="p-2 bg-base-100">
              <li><button on:click={() => setTheme('dark')}>Dark</button></li>
              <li><button on:click={() => setTheme('light')}>Light</button></li>
              <li><button on:click={() => setTheme('valentine')}>Valentine</button></li>
            </ul>
          </details>
        </li>
        <li>
          <details class="w-full">
            <summary>List of tools</summary>
            <ul class="p-2 bg-base-100">
              <li><a href="/tools/numbers">Numbers</a></li>
              <li><a href="/tools/str">Str</a></li>
              <li><a href="/tools/test">Test</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>
</div>

<slot />
