<script>
    import { Container , PageHeading } from '$lib/components';
	import { FormSelectCommunity } from '$lib/forms';
	import { TablePeopleGen } from '$lib/tables';
    import dayjs from 'dayjs';

    export let data;
    export let form;

    let community = '';
    let toGen = [];

    const handleSelectCommunity = e => {
        community = e.target.value;
    }

    $: if(form?.docs) {
        form.docs = form.docs.map(doc => ({...doc,birth: dayjs(Date(doc.birth)).format('DD/MM/YYYY')}))
    
    }
</script>

<Container title="Beneficiarios">
    <PageHeading title="Beneficiarios"/>
    <div class="px-4">
        {#if data?.docs?.length}
        <div class="actions">
            <a href="/v1/admin/people/add" class="btn btn-ghost text-success">Registrar un beneficiario</a>
            <a href="/v1/admin/people/addmany" class="btn btn-ghost text-info">Cargar Listado</a>
        </div>
        <FormSelectCommunity docs={data.docs} disabled={!community} handleChange={handleSelectCommunity} />
        {#if form?.docs}
            {#if toGen.length}
            <div class="gen-button">
                <a href="/v1/admin/people/generate" class="btn text-xs btn-accent">generar para la selección</a>
            </div>
            {/if}
            {#if form.docs.length}
            <TablePeopleGen bind:toGen={toGen} people={form.docs} />
            {:else}
            <h3 class="text-center text-2xl font-bold mt-4">No se encontraron beneficiarios en esta comunidad</h3>
            {/if}
        {/if}
        {:else}
        <h3 class="text-center text-2xl font-bold mt-4">Por favor primero registra una comunidad</h3>
        {/if}
    </div>
</Container>

<style>
    .actions {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .gen-button {
        display:flex;
        width:100%;
        justify-content: flex-end;
    }
</style>