<?php
/* Smarty version 4.3.2, created on 2023-08-16 22:16:34
  from 'C:\Users\pod_m\OneDrive\Documents\Dev\keithjaspercouk\template\contentwrap.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_64dd2ea2e84c66_26042572',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '46240e37e7259788a0ebee0084dd23566e2ac015' => 
    array (
      0 => 'C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\template\\contentwrap.tpl',
      1 => 1692211198,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:content.tpl' => 1,
  ),
),false)) {
function content_64dd2ea2e84c66_26042572 (Smarty_Internal_Template $_smarty_tpl) {
?><div id="content" class="content">
    <div id="top-bar" class="top-bar">
        <h1><?php echo $_smarty_tpl->tpl_vars['currentIcon']->value;?>
&nbsp;<?php echo $_smarty_tpl->tpl_vars['pageTitle']->value;?>
</h1>
    </div>
    <?php $_smarty_tpl->_subTemplateRender("file:content.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
</div><?php }
}
