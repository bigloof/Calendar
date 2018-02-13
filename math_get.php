<html>
    <script type="text/javascript" src="calendar.js"></script>
<body>
<?php
$x = $_GET["WDlayoff"]; 
$y = .25; 
$total = $x * $y;
?>
Weekdays <?php echo $total; ?><br>

</body>
</html>