<script>
    import print from 'print-js';
    import { Container , PageHeading } from '$lib/components';
    import { TablePeopleResume } from '$lib/tables';
    export let data;


</script>

<Container title="Resumen de jornada">
    <PageHeading title="Resumen de jornada" />
    {#if data?.doc && data?.community && data?.people}
    <button class="btn btn-ghost text-success my-2" on:click={() => print({
        printable: 'page',
        type: 'html',
        style: 'td , tr , th { text-align: center; border: .5px solid #000; }'
    })}>Imprimir</button>
    {/if}
    <div id="page" class="page">
    {#if data?.community}
        <h2 class="text-3xl font-bold">Jornada {data.doc.name}</h2>
        <div class="divider"></div>
        <h3 class="text-2xl">Comunidad: {data.community.name}</h3>
        {#if data?.people}
            <TablePeopleResume people={data.people} />
        {/if} 
    {/if}
    </div>
</Container>

<style>
    .page {
        background-color: #fff;
        color: #000;
        padding: 2rem
    }
</style>