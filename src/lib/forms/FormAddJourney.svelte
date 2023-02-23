<script>
    import { enhance } from '$app/forms';
    export let form;
    export let docs;
</script>

<form action="?/addjourney" method="post" use:enhance>
    <select name="community" class="select select-bordered">
        <option disabled value="" class="text-white" selected>Selecciona una comunidad</option>
        {#each docs as doc}
        <option value="{doc.id}">{doc.name}</option>
        {/each}
    </select>
    <label for="" class="label">
        <span class="label-text" class:text-error={form?.name && form?.missing}>Nombre de jornada</span>
    </label>
    <input 
        name="name" 
        type="text" 
        placeholder="Nombre de la jornada" 
        class="input input-bordered w-full "
        class:input-error={form?.name && form?.missing} 
    />
    <label for="" class="label">
        <span class="label-text" class:text-error={form?.name && form?.missing}>Fecha de jornada</span>
    </label>
    <input 
        name="date" 
        type="date"
        class="input input-bordered w-full "
        class:input-error={form?.date && form?.missing} 
    />
    <div class="py-4">
        <button class="btn" type="submit">Enviar</button>
    </div>
</form>