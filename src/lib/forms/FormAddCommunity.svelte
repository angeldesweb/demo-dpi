<script>
    import toast from 'svelte-french-toast';
    import { enhance } from '$app/forms';
    import { SquareRoundedPlus } from '$lib/components';

    let name = '';
    export let cb;

    const handleAdd = ({ form }) => {
        return async ({ result }) => {
            if(result.type === 'success') {
                toast.success('Registrado con éxito');
                name = '';
                cb()
            }
        }
    }
</script>

<form action="?/addcommunity" method="post" use:enhance={handleAdd}>
    <div class="form-control">
        <div class="input-group">
            <input bind:value={name} name="name" type="text" placeholder="Nombre de comunidad" class="input input-bordered" />
            <button type="submit" class="btn" disabled={!name}>
                <SquareRoundedPlus/>
            </button>
        </div>
    </div>
</form>