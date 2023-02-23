<script>
    import { browser } from '$app/environment';
    import { enhance } from '$app/forms';

    export let toGen;
    export let people;

    const handleAll = (e) => {
        const nodes = document.querySelectorAll('.checkbox')
        nodes.forEach(node => {
            node.checked = e.target.checked;
        })
        if(e.target.checked) {
            let gen = people.map(obj => JSON.stringify(obj));
            let clean = new Set([...gen]);
            toGen = [...clean];
            browser && localStorage.setItem('gen',JSON.stringify(toGen))
        } else {
            toGen = []
            browser && localStorage.setItem('gen',JSON.stringify(toGen))
        }
    }

    const handleOne = (e) => {
        if(e.target.checked) {
            let selected = people.find(item => item.id === e.target.id);
            let objStr = JSON.stringify(selected);
            let clean = new Set([...toGen,objStr]);
            toGen = [...clean];
            browser && localStorage.setItem('gen',JSON.stringify(toGen))
        } else {
            let dataObjects = toGen.map(str => JSON.parse(str))
            .filter(obj => obj.id !== e.target.id);
            let strObjects = dataObjects.map(obj => JSON.stringify(obj));
            let clean = new Set([...strObjects]);
            toGen = [...clean]
            browser && localStorage.setItem('gen',JSON.stringify(toGen))
        }
    }

    $: console.log(toGen)
</script>

<div class="overflow-x-auto w-full mt-8">
    <table class="table w-full">
        <thead>
            <tr>
                <th>
                    <label>
                        <input on:change={handleAll} type="checkbox" class="checkbox" />
                    </label>
                </th>
                <th>Nombre</th>
                <th>CUI</th>
                <th>Fecha nacimiento</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each people as person}
            <tr>
                <th>
                    <label>
                        <input on:change={handleOne} id="{person.id}" type="checkbox" class="checkbox" />
                    </label>
                </th>
                <td>{person.name}</td>
                <td>{person.cui}</td>
                <td>{person.birth || 'Pendiente'}</td>
                <th>
                    <a href="/v1/admin/people/generate/{person.id}" class="btn text-xs btn-ghost text-accent btn-xs">generar</a>
                    <button class="btn text-xs btn-ghost text-info btn-xs">detalles</button>
                </th>
            </tr>
            {/each}
        </tbody>
    </table>
</div>