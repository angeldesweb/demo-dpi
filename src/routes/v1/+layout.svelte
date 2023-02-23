<script>
    import { Navbar } from '$lib/components';
    import { enhance } from '$app/forms';
</script>

<Navbar>
    <form slot="end" method="post" use:enhance >
        <button class="btn" formaction="?/logout">Cerrar</button>
    </form>
</Navbar>

<slot/>