{if $pageTitle != "Home"}
        <div class="content-header">
            {* <h1>{$pageTitle} {if $subPage|count_characters > 1} | {/if} {$subPage}</h1> *}
        </div>
{/if}
            
{if $subPage|count_characters < 1}
    {include file="pages/{$getContent}.tpl"}
{/if}
