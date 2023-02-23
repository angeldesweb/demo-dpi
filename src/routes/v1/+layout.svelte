<script>
    import { Navbar } from '$lib/components';
    import { enhance } from '$app/forms';
</script>

<Navbar>
    <form slot="end" method="post" use:enhance >
        <a href="/logout" class="btn">Cerrar</a>
    </form>
</Navbar>

<slot/>