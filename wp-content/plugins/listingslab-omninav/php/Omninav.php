<?php

// pray. no don't, just make a widget

class Omninav{
  
      private static $instance;
  
      static function GetInstance(){
	      if (!isset(self::$instance)) {
	          self::$instance = new self();
	      }
	      return self::$instance;
      }
      
      public function InitPlugin(){
      	require_once plugin_dir_path( __FILE__ ) . 'widget.php';
    		$widget = new omninav_Widget();	
      }
  
 }
 