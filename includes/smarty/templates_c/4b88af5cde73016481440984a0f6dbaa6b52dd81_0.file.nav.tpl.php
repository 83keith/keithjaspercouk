<?php
/* Smarty version 4.3.2, created on 2023-08-16 22:16:34
  from 'C:\Users\pod_m\OneDrive\Documents\Dev\keithjaspercouk\template\nav.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_64dd2ea2e77d36_25822503',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4b88af5cde73016481440984a0f6dbaa6b52dd81' => 
    array (
      0 => 'C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\template\\nav.tpl',
      1 => 1692213439,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_64dd2ea2e77d36_25822503 (Smarty_Internal_Template $_smarty_tpl) {
?>        <div id="sidebar" class="sidebar">
            <h1>Keith Jasper</h1>
            <ul>
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['navigation_array']->value, 'value', false, 'name');
$_smarty_tpl->tpl_vars['value']->do_else = true;
if ($_from !== null) foreach ($_from as $_smarty_tpl->tpl_vars['name']->value => $_smarty_tpl->tpl_vars['value']->value) {
$_smarty_tpl->tpl_vars['value']->do_else = false;
?>
                    <?php if ($_smarty_tpl->tpl_vars['value']->value['icon'] == "seperator") {?>
                    <li class="heading">
                        <?php echo $_smarty_tpl->tpl_vars['value']->value['name'];?>

                    </li>
                    <?php } else { ?>
                        <li>
                        <a href="<?php echo $_smarty_tpl->tpl_vars['value']->value['href'];?>
">
                            <?php echo $_smarty_tpl->tpl_vars['value']->value['icon'];?>

                            <?php echo $_smarty_tpl->tpl_vars['value']->value['name'];?>

                        </a>
                    </li>
                    <?php }?>

                <?php
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            </ul>
</div>
<?php }
}
