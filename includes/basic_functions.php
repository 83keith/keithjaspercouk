<?php
function generateNavigation()
{
    $nav = array();
    $nav[0]['name'] = "Home";
    $nav[0]['icon'] = '<i class="fa-solid fa-house fa-lg"></i>';
    $nav[0]['href'] = "/";

    $nav[1]['name'] = "CV";
    $nav[1]['icon'] = '<i class="fa-solid fa-copy fa-lg"></i>';
    $nav[1]['href'] = "/cv";

    $nav[2]['name'] = "Code";
    $nav[2]['icon'] = '<i class="fa-solid fa-code fa-lg"></i>';
    $nav[2]['href'] = "/code";

    $nav[3]['name'] = "Projects";
    $nav[3]['icon'] = '<i class="fa-solid fa-layer-group fa-lg"></i>';
    $nav[3]['href'] = "/projects";

    $nav[4]['name'] = "Samples";
    $nav[4]['icon'] = 'seperator';
    $nav[4]['href'] = "";

    $nav[5]['name'] = "Dashboard";
    $nav[5]['icon'] = '<i class="fa-solid fa-sliders fa-lg"></i>';
    $nav[5]['href'] = "/samples/dashboard";

    $nav[6]['name'] = "PowerShell";
    $nav[6]['icon'] = '<i class="fa-solid fa-terminal fa-lg"></i>';
    $nav[6]['href'] = "/samples/powershell";

    $nav[7]['name'] = "Monitoring";
    $nav[7]['icon'] = '<i class="fa-solid fa-desktop fa-lg"></i>';
    $nav[7]['href'] = "/samples/monitoring";#
    
    return $nav;
}