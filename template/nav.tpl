        <header id="sidebar" class="sidebar">
            <h1>Keith Jasper</h1>
            <ul>
                {foreach from=$navigation_array key=name item=value}
                    {if $value.icon == "seperator"}
                    <li class="heading">
                        {$value.name}
                    </li>
                    {else}
                        <li>
                        <a href="{$value.href}">
                        <i class="fa-solid {$value.icon} fa-lg"></i>
                            {$value.name}
                        </a>
                    </li>
                    {/if}

                {/foreach}
            </ul>
</header>
