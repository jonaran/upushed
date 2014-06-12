<?php

//CONNECTS TO YOUR DATABASE (MODIFY TO YOUR OWN SETTINGS)
$c = mysql_connect("upushed.com", "root", "jona");
$db = mysql_select_db("upushed", $c);

//TABLES FOR THE CONTENT AND THE RATINGS (MODIFY IF TABLE NAMES ARE DIFFERENT)
$content = 'content';
$ratings = 'ratings';

$ip = $_SERVER["REMOTE_ADDR"]; //IP ADDRESS

?>