<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name: WP Web Components
 * Description: A Psuedo Web Component like React Boilerplate
 * Author: Paul Joseph Cox
 * Version: 1.0
 * Author URI: https://pauljosephcox.com/
 */

if (!defined('ABSPATH')) exit;

class WP_WebComponents {

	/**
	 * Constructor
	 * Setup the core functionality changes to wordpress
	 */

	function __construct(){

		$this->path    = plugin_dir_path(__FILE__);
		$this->url     = plugin_dir_url(__FILE__);
		$this->slug    = 'wp-react-starter';
    	$this->version = '0.0.1';

		// Include Javascript
		add_action('wp_enqueue_scripts', array($this, 'scripts'));

		// Shortcode Implementation
        add_shortcode('hello_world', array($this, 'shortcode_component_hello_world'));

	}

    public function shortcode_component_hello_world($attr) {

		ob_start();
		include($this->template('component-hello-world.php'));
		return ob_get_clean();

	}

	public function scripts(){

		wp_enqueue_script($this->slug.'.webcomponents.js', $this->url.'react/build/static/js/main.js', array(), $this->version, true);

	}

	/**
	 * Template
	 * Get the path to a template include
	 * @param string $filename The name of the template to include
	 * @return string The path to the template
	 */

	public function template($filename) {

		$theme = get_template_directory() . '/'.$this->slug.'/' . $filename;
		return (file_exists($theme)) ? $theme : $this->path . 'templates/' . $filename;

	}

}

$wp_web_components = new WP_WebComponents();

?>
