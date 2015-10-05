<!DOCTYPE html>
<?php
   include_once 'config.php';
   include_once 'db/session.php';
   $level = 1;
   if(isset($_GET['level']) && $_GET['level'] > 0) { //&& $_GET['level'] <= $GLOBALS['LEVEL_COUNT']){
	                                                               $level = $_GET['level'];
                                                                       }
                                                                       ?>
<html>
  <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
  <script src="bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
  <?php include_once 'include/head.php'; ?> 
  <body>
    <div id="container" class="container-fluid">
      <input id="i-level" type="hidden" value="<?= $level ?>" />
      <input id="i-maxlevel" type="hidden"
             value="<?= $GLOBALS['LEVEL_COUNT'] ?>" />
      
      <div class="row">
        <?php include_once 'include/header.php'; ?>

        <div class="col-xs-5 top-space" style="background-color: white">
          <?php include_once 'include/game_content.php'; ?>
        </div>
        
        <div class="col-xs-7 top-space">
          <div class="col-xs-4" style="padding-left: 0;
                                       padding-right: 0">
            <h5>Acciones disponibles</h5>
          </div>
          <div class="col-xs-8" style="padding-left: 0;
                                       padding-right: 0">
            <h5>Acciones a realizar </h5>
          </div>
	  <?php include_once 'include/block_content.php'; ?>          
        </div>
      </div>


      
      <?php $a = 'include/game_header.php'; ?>    
      <?php
         /*Bloques disponibles e iniciales para $level*/
         include_once "level/block/block_$level.php";
         
         /*Mensajes utilizados para $level*/
         include_once "level/modal/modal_$level.php";
         ?>
      <?php include_once "include/modals.php"; ?>
      
      <!--<script src="js/modalPlugin.js"></script>-->
      
      <script src="level/json/level_<?= $level ?>.js"></script>
      <script src="js/content.js"></script>
      <script src="../../crafty/crafty-min.js"></script>
      <script src="../../juego/juego4.js"></script>
      <script src="js/blockInit.js"></script>

      <script src="js/highlight.pack.js"></script>


      
      <div id="footer" class="col-xs-12">
        <p><a href="#" data-toggle="modal" data-target="#copyrightModal"><small>Copyright</small></a> &nbsp;
        &nbsp; <small>Juego creado para
        funcionar en <a href="http://google.com/chrome">Google Chrome</a>
        o <a href="http://mozilla.org/firefox">Mozilla Firefox</a></small></p>
      </div>
    </div>


    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67801102-2', 'auto');
  ga('send', 'pageview');

</script>
  </body>
</html>
