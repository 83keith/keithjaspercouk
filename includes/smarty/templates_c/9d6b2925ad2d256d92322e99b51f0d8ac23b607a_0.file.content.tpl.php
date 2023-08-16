<?php
/* Smarty version 4.3.2, created on 2023-08-15 22:44:30
  from 'C:\Users\pod_m\OneDrive\Documents\Dev\keithjaspercouk\template\content.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_64dbe3ae419749_67619270',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9d6b2925ad2d256d92322e99b51f0d8ac23b607a' => 
    array (
      0 => 'C:\\Users\\pod_m\\OneDrive\\Documents\\Dev\\keithjaspercouk\\template\\content.tpl',
      1 => 1692132267,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:pages/".((string)$_smarty_tpl->tpl_vars[\'getContent\']->value).".tpl' => 1,
  ),
),false)) {
function content_64dbe3ae419749_67619270 (Smarty_Internal_Template $_smarty_tpl) {
if ($_smarty_tpl->tpl_vars['pageTitle']->value != "Home") {?>
        <div class="content-header">
            <h1><?php echo $_smarty_tpl->tpl_vars['pageTitle']->value;?>
 <?php if (preg_match_all('/[^\s]/u',$_smarty_tpl->tpl_vars['subPage']->value, $tmp) > 1) {?> | <?php }?> <?php echo $_smarty_tpl->tpl_vars['subPage']->value;?>
</h1>
        </div>
<?php }?>
            
<?php if (preg_match_all('/[^\s]/u',$_smarty_tpl->tpl_vars['subPage']->value, $tmp) < 1) {?>
    <?php $_smarty_tpl->_subTemplateRender("file:pages/".((string)$_smarty_tpl->tpl_vars['getContent']->value).".tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
}
}
}
