<script>
    import { Jellyfish } from 'svelte-loading-spinners';
    import { goto } from '$app/navigation';

    export let data;

    if(data?.close) {
        goto('/')
    }
</script>

<div class="loading">
    <Jellyfish color="#fff"/>
    <span>Cargando...</span>
</div>

<style>
    .loading {
        width: 100vw;
        height: 100vh;
        display:grid;
        place-content: center;
    }
</style>