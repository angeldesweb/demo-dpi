<script>
    import { Container } from '$lib/components';
	import { PageHeading } from '$lib/components';

    export let data;

    $: docs = data?.docs || [];

    $: console.log(data);
</script>

<Container title="Jornadas">
    <PageHeading title="Jornadas"/>
    <div class="px-4">
        {#if docs.length}
        {#each docs as doc}
        <div class="card shadow-xl item">
            <span class="font-bold">{doc.name}</span>
            <a href="/v1/{doc.id}" class="btn btn-ghost text-info text-xs">Ejecutar</a>
        </div>
        {/each}
        {/if}
    </div>
</Container>

<style>
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 10px 20px;
    }
</style>
