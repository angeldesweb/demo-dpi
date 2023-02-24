<script>
    export let people;

    $: console.log(people)
</script>

<table class="table w-full my-8" data-theme="light">
    <!-- head -->
    <thead>
        <tr>
            <th>N°</th>
            <th>Nombre del beneficiario</th>
            <th>CUI</th>
            <th>Edad</th>
            <th>N° Raciones</th>
            <th>Firma o Huella dactilar</th>
        </tr>
    </thead>
    <tbody>
        <!-- row 1 -->
        {#each people as person, i}
            <tr>
                <td>{i + 1}</td>
                <td>{person.name}</td>
                <td>{person.cui}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        {/each}
    </tbody>
</table>
<style>
    table {
        background-color: #fff;
    }

    @media print {
        td, th , tr {
            text-align: center;
            border: .5px solid #000;
        }
    }
</style>