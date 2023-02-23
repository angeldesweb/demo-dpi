<div class="navbar bg-base-100 shadow-xl z-index-3">
    <div class="navbar-start">
        <div class="dropdown">
            <label for="" tabindex="-1" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="-1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/v1/admin">Administrar</a></li>
                <li><a href="/v1/new">Agregar jornada</a></li>
            </ul>
        </div>
        <a href="/v1" class="btn btn-ghost normal-case text-xl">App</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/v1/admin">Administrar</a></li>
            <li><a href="/v1/new">Agregar jornada</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <slot name="end"></slot>
    </div>
</div>