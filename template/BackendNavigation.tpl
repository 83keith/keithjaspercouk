{foreach $nav as $row}
<form method="post" action="./">
    <input type="text" name="name" value="{$row['name']}" />
    <input type="text" name="icon" value='{$row['icon']}' size="50" />
    <input type="text" name="href" value="{$row['href']}"  />
    <input type="checkbox" name="visible" {if $row['visible'] == 1}checked{/if} />
    <input type="hidden" name="id" value="{$row['id']}" />
    <input type="submit" name="Save" value="Save" />
    <input type="submit" name="Delete" value="Delete?" />
</form>
{/foreach}
Add New:<br />
<form method="post" action="./">
<input type="hidden" name="new" value="new" />
<input type="text" name="name" value="" />
<input type="text" name="icon" value='' size="50" />
<input type="text" name="href" value=""  />
<input type="checkbox" name="visible"  checked />
<input type="submit" name="New" value="New" />
</form>