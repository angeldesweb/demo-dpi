<script>
    import { enhance } from '$app/forms';

    export let docs;
    export let handleChange;
    export let disabled;
</script>

<form class="mt-4" action="?/getUsersByLocation" method="post" use:enhance>
    <div class="form-control">
        <div class="input-group">
            <select name="community" class="select select-bordered" on:change={handleChange} >
                <option disabled value="" class="text-white" selected>Selecciona una comunidad</option>
                {#each docs as doc}
                <option value="{doc.id}">{doc.name}</option>
                {/each}
            </select>
            <button class="btn" disabled={disabled}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
    </div>
</form>