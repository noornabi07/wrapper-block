<?php
/**
 * Plugin Name:       B Container Block
 * Description:       A versatile and customizable container block for Gutenberg that allows you to group and style multiple blocks within a single container, enhancing your page layout and design capabilities.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       b-blocks
 *
 * @package CreateBlock
 */

if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'CRTB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'CRTB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'CRTB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'CRTBPlugin' ) ){
	class CRTBPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new CRTBPlugin();
}