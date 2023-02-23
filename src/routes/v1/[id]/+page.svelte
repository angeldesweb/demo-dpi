<script>
    import { enhance } from '$app/forms';
    import { Container , PageHeading } from '$lib/components';
    import toast from 'svelte-french-toast';
    
    export let data;
    
    let id = '';
    let input;
    let people = []

    const handleAssign = async () => {
        return async ({result}) => {
            if(result.type === 'success') {
                toast.success('Actualizado con éxito')
                id = '';
                input.focus();
            }
        }
    }
    const focus = (node) => {
        node.focus();
    }

    $: if(data?.doc) {
        people = data.doc.people || [];
    }
</script>

<Container title="Jornada activa">
    <PageHeading title="Jornada activa"/>
    {#if data?.doc}
        <div class="box">
            <div class="card shadow-xl p-4">
                <h3 class="text-center text-2xl">Escanee código de barras</h3>
                <div class="divider"> o </div>
                <input bind:this={input} type="text" use:focus bind:value={id} placeholder="Ingrese el código aquí" class="input input-bordered">
                <form action="?/setuser&id={data.doc.id}&people={JSON.stringify(people)}&person={id}" method="post" use:enhance={handleAssign}>
                    <button class="btn mt-4">Aceptar</button>
                </form>
            </div>
        </div>
    {/if}
</Container>

<style>
    .box {
        display:grid;
        place-content: center;
        height: 100%;
    }
    .card {
        width: 30rem;
    }
</style>