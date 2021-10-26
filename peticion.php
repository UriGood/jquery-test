<?php
    $nombre = $_REQUEST["nombre"];
    $mensaje = $_REQUEST["mensaje"];
    $mail = $_REQUEST["mail"];

    if ($nombre != "" && $mensaje != "" && $mail != "") {
        echo "correcto";
    }else{
        echo "incorrecto";
    }
?>