<script>
    import { onMount } from 'svelte';
    import { Jellyfish } from 'svelte-loading-spinners';
    import { Container , PageHeading } from '$lib/components';
    import { listCommunities } from '$lib/firebase/firestore/communities';
	import { FormAddCommunity , FormCrudCommunity } from '$lib/forms';

    let gettingDocs = false;
    let docs = [];

    const refreshView = async () => {
        const results = await listCommunities();
        docs = results.docs;
    }

    onMount(async() => {
        gettingDocs = true;
        const results = await listCommunities();
        docs = results.docs || [];
        gettingDocs = false;
    });
</script>

<Container title="Comunidades">
    <PageHeading title="Comunidades"/>
    <div class="px-4">
        <FormAddCommunity cb={refreshView} />
        {#if gettingDocs}
            <div class="load">
                <Jellyfish color="#fff" />
            </div>
        {:else}
            {#if !docs.length}
                <div class="my-4">
                    <h3 class="text-center text-2xl font-bold w-full">No se encontraron elementos</h3>
                </div>
            {:else}
                {#each docs as item , i }
                    <FormCrudCommunity {...item} i={i} refresh={refreshView} />
                {/each}
            {/if}
        {/if}
    </div>    
</Container>

<style>
    .load {
        width: 100%;
        height: 10rem;
        display:grid;
        place-content: space-around;
    }
</style>
