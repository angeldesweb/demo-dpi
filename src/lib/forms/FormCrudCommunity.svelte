<script>
    import { fly } from 'svelte/transition';
    import { enhance } from '$app/forms';

    export let id = '';
    export let name = '';
    export let edit = '';
    export let i;
    export let refresh;

    let modal;
    let value = name;

    $: edit = false;

    const handleUpdateChange = e => {
        value = e.target.value;
        console.log(value)
    }

    const handleUpdate = ({ form , action }) => {
        if(!value) value = name;
        if(!!value) name = value;
        return async ({result}) => {
            if(result.type === 'success') {
                edit = false;
                refresh()
            }
        }
    }

    const handleDelete = ({ form , action }) => {
        modal.click()
        return async ({ result }) => {
            if(result.type === 'success') {
                refresh()
            }
        }
    }
</script>
<div transition:fly class="item card p-4 shadow-xl">
    {#if !edit}
    <p>Comunidad: <span class="font-bold text-xl font-bold ">{name}</span></p>
    {:else}
    <input value={name} on:input={handleUpdateChange} name="name" type="text" placeholder="Editar..." 
        class="input input-bordered input-xs" 
    />
    {/if}
    <div class="item-btns">
        {#if !edit}
            <button class="btn btn-ghost text-info text-xs" on:click={() => edit = true} >editar</button>
            <button class="btn btn-ghost text-error text-xs" on:click={() => modal.click()}>elimnar</button>
        {:else}
            <button class="btn btn-ghost text-info text-xs" on:click={() => edit = false}>cancelar</button>
            <form method="post" use:enhance={handleUpdate} style="display:inline-block">
                <button 
                    formaction="?/updateCommunity&name={value}&id={id}" 
                    class="btn btn-ghost text-success text-xs"
                >guardar</button>
            </form>
        {/if}
    </div>
</div>

<input type="checkbox" id="my-modal-{i}" class="modal-toggle" bind:this={modal} />
<div class="modal">
    <div class="modal-box relative md:ml-4">
        <h3 class="font-bold text-lg">¿Seguro de que desea eliminar?</h3>
        <p class="py-4">Esta acción es irreversible y puede afectar a otras colecciones relacionadas a este registro.</p>
        <div class="modal-action">
            <label for="my-modal-{i}" class="btn text-info btn-ghost">cancelar</label>
            <form method="POST" use:enhance={handleDelete} style="display:inline-block">
                <button 
                    formaction="?/deleteCommunity&id={id}" 
                    class="btn btn-ghost text-error text-xs"
                >eliminar</button>
            </form>
        </div>
    </div>
</div>

<style>
    .item {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;;
    }
</style>