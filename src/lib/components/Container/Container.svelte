<script>
    import { onMount } from 'svelte';
    import { loading } from '$lib/store';
    export let title = '';
    onMount(() => loading.off());
</script>

<svelte:head>
    <title>{ title }</title>
</svelte:head>

<slot></slot>

