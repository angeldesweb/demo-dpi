<script>
    import { Container } from '$lib/components';
	import { PageHeading } from '$lib/components';
	import { FormAddJourney } from '$lib/forms';

    export let data;

    $: docs = data?.docs || [];
</script>

<Container title="Jornadas">
    <PageHeading title="Jornadas"/>
    <div class="px-4">
        <FormAddJourney {docs} />
    </div>
</Container>