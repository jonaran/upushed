<?php

//COUNT LIKES & DISLIKES
$q = mysql_query("SELECT * FROM $ratings WHERE id='$id' AND rating='like'");
$likes = mysql_num_rows($q);
$q = mysql_query("SELECT * FROM $ratings WHERE id='$id' AND rating='dislike'");
$dislikes = mysql_num_rows($q);

//LIKE & DISLIKE IMAGES
$l = '../img/like1.png';
$d = '../img/dislike1.png';

//CHECKS IF USER HAS ALREADY RATED CONTENT
$q = mysql_query("SELECT * FROM $ratings WHERE id='$id' AND ip='$ip'");
$r = mysql_fetch_assoc($q); //CHECKS IF USER HAS ALREADY RATED THIS ITEM

//IF SO, THE RATING WILL HAVE A SHADOW
if($r["rating"]=="like"){
    $l = '../img/like.png';
}
if($r["rating"]=="dislike"){
    $d = '../img/dislike.png';
}

//FORM & THE NUMBER OF LIKES & DISLIKES
$m = '<img id="like" onClick="rate($(this).attr(\'id\'))" src="'.$l.'"> '.$likes.' &nbsp;&nbsp; <img id="dislike" onClick="rate($(this).attr(\'id\'))" src="'.$d.'"> '.$dislikes;
    
?>