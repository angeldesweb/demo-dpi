<script>
    import PrintPdf, { Page } from 'svelte-printpdf';
    import Barcode from 'svelte-barcode'
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { onDestroy , onMount } from 'svelte';

    let mounting = true;

    const selection = browser && localStorage.getItem('gen');

    let people = [];
    let targets = [];
    let groups = {};

    const setGroup = (i) => {
        i+= 1
        let count = i / 6;
        let group = Math.ceil(count);
        return group;
    }

    const printAll = () => targets = targets.map(() => true)

    const returnPage = () => {
        browser && localStorage.removeItem('gen');
        browser && goto('/v1/admin/people')
    }

    onMount(() => {
        const peopleStr = JSON.parse(selection);
        people = peopleStr.map(str => JSON.parse(str));
        people = people.map((obj,i) => ({...obj,group:`grupo-${setGroup(i)}`}));
        groups = people.reduce((acc,obj) => {
            acc = acc[obj.group]  ? {...acc,[obj.group]:[...acc[obj.group],{...obj}]} : {...acc,[obj.group]:[{...obj}]}
            return acc
        },{});
        mounting = false;
        targets = people.map(() => false);
    })
    onDestroy(() => browser && localStorage.removeItem('gen'));
</script>

{#if selection}
<div class="m-8 flex justify-around">
    <button class="btn btn-success text-white" on:click={printAll}>Imprimir todo</button>
    <button class="btn btn-success text-white" on:click={returnPage}>Regresar</button>
</div>
{/if}

{#if Object.entries(groups).length}
{#each Object.entries(groups) as docs , i}
<div class="mt-3">
    <button class="btn btn-ghost text-success" on:click={() => targets[i] = true}>Imprimir</button>
</div>
<PrintPdf bind:print={targets[i]}>
    <Page>
        <div class="view">
            <div class="title w-full">
                <p class="p-4 font-bold">Grupo - {i}</p>
            </div>
            <div class="box">
                {#each docs[1] as doc , i }
                <div class="card p-6 shadow-xl">
                    <div class="barcode">
                        <p>{doc.name}</p>
                        <Barcode 
                            options={{
                                width: 1,
                                height: 30
                            }}
                            value="{doc.id}"
                        />
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </Page>
</PrintPdf>
{/each}
{/if}
<style>
    .view {
        background-color: #fff;
        color: #000;  
    }
    .title {
        display:flex;
        justify-content: flex-end;
    }
    .box {
        display: grid;
        padding: 1em;
        gap:1em;
        grid-template-columns: repeat(auto-fill,20rem);
    }
</style>