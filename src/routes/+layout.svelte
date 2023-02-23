<script>
    import "../app.postcss";
    import { loading } from '$lib/store';
    import { Jellyfish } from 'svelte-loading-spinners';
    import { Toaster } from 'svelte-french-toast';
</script>

{#if $loading}
<div class="loading">
    <Jellyfish color="#fff"/>
    <span>Cargando...</span>
</div>
{/if}
<div class="content" class:hidden={$loading}>
    <slot/>
    <Toaster/>
</div>

<style>
    .loading {
        width: 100vw;
        height: 100vh;
        display:grid;
        place-content: center;
    }

    .hidden {
        display: none;
    }
</style>