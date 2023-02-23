<script>
    import { Container } from '$lib/components';
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { Diamonds } from 'svelte-loading-spinners';
    import toast from 'svelte-french-toast';

    let isSubmitting = false;
</script>

<Container title="Inicio de sesión">
    <div class="view">
        <div class="login card shadow-xl">
            <form method="post" class="login-form" use:enhance={() => {
                isSubmitting = true;
                return async ({ result }) => {
                    isSubmitting = false;
                    if (result.type === 'success') {
                        goto('/v1');
                    }
                    if(result.type === 'error') {
                        console.log(result)
                        //toast.error(result.data.code);
                    }
                }
            }} >
                <div class="form-control my-3">
                    <label for="">Correo electrónico</label>
                    <input class="input input-bordered w-full" type="email" name="email" id="eamil" placeholder="example@mail.com">
                </div>
                <div class="form-control my-3">
                    <label for="password">Contraseña</label>
                    <input class="input input-bordered w-full" type="password" name="password" id="password" placeholder="Ingrese su contraseña">
                </div>
                <button class="btn" disabled={isSubmitting}>
                    {#if isSubmitting}
                    <Diamonds color="#fff" />
                    {:else}
                    Iniciar sesión
                    {/if}
                </button>
            </form>
        </div>
    </div>
</Container>

<style>
    .view {
        width:100vw;
        height: 100vh;
        display:grid;
        place-content: space-around;
    }

    .login {
        width: min(30rem,100%);
        padding:2em;
    }
</style>