<script>
    import { enhance } from '$app/forms';
    import { Container } from '$lib/components';
	import { PageHeading } from '$lib/components';

    export let data;

    let opens = [];
    let closeds = [];

    $: docs = data?.docs || [];

    $: if(docs.length) {
        opens = docs.filter(obj => obj.open === true);
    }

    $: if(docs.length) {
        closeds = docs.filter(obj => obj.open === false);
    }
</script>

<Container title="Jornadas">
    <PageHeading title="Jornadas"/>
    <div class="px-4">
        {#if opens.length}
        <h3 class="text-2xl">Jornadas en proceso</h3>
        {#each opens as doc}
        <div class="card shadow-xl item mt-4">
            <span class="font-bold">{doc.name}</span>
            <div class="buttons">
                <a href="/v1/{doc.id}" class="btn btn-ghost text-info text-xs">Ejecutar</a>
                <form method="post" use:enhance>
                    <button formaction="?/closejourney&id={doc.id}" class="btn btn-ghost text-error text-xs">Finalizar</button>
                </form>
            </div>
        </div>
        {/each}
        {/if}
        {#if  closeds.length}
        <h3 class="text-2xl mt-4">Jornadas finalizadas</h3>
        {#each  closeds as doc}
        <div class="card shadow-xl item mt-4">
            <span class="font-bold">{doc.name}</span>
            <div class="buttons">
                <a href="/v1/reports/{doc.id}" class="btn btn-ghost text-info text-xs">Ver resumen</a>
                <form method="post" use:enhance>
                    <button formaction="?/reopenjourney&id={doc.id}" class="btn btn-ghost text-error text-xs">Reabrir</button>
                </form>
            </div>
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

    .buttons {
        display:flex;
        gap: 1em;
    }
</style>
