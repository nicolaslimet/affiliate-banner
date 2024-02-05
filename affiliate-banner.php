<?php
/**
 * Plugin Name: Affiliate Banner
 * Description: Display a welcome banner for affiliate links
 * Author: Nicolas Limet
 * License: GPL v3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Requires at least: 5.8.0
 * Requires PHP: 7.4
 * Text Domain: affiliate-banner
 *
 * @package HDCPAB
 */

namespace HDCPAB;

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'HDCPAB_FILE' ) ) {
	define( 'HDCPAB_FILE', __FILE__ );
}

if ( ! defined( 'HDCPAB_BLOCK_ASSETS' ) ) {
	define( 'HDCPAB_BLOCK_ASSETS', plugin_dir_path( HDCPAB_FILE ) . 'assets/js/' );
}


add_action( 'init', 'HDCPAB\register_blocks', 10, 0 );


/**
 * Register our blocks.
 *
 * @return void
 */
function register_blocks(): void {
	register_block_type( HDCPAB_BLOCK_ASSETS . 'affiliate-banner', [ 'render_callback' => 'HDCPAB\render_banner' ] );
	register_block_type( HDCPAB_BLOCK_ASSETS . 'affiliate-name' );
}


/**
 * Renders the Affiliate Banner block.
 *
 * @param array     $attributes Array of block attributes.
 * @param string    $content    Block content.
 *
 * @return string
 */
function render_banner( array $attributes, string $content ): string {

	if ( empty( $attributes['urlParam'] ) || empty( $_GET[ $attributes['urlParam'] ] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return '';
	}

	$login = sanitize_text_field( wp_unslash( $_GET[ $attributes['urlParam'] ] ) ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	if ( ! $login ) return '';

	// Get user and bail out early if not found.
	$user = get_user_by( 'login', $login );

	if ( ! $user ) {
		return '';
	}

	// Bail if the user is admin or super_admin.
	$no_show_roles = [ 'admin', 'super_admin' ];
	if ( ! empty( array_intersect( $user->roles, $no_show_roles ) ) ) {
		return '';
	}

	// Format the full name, with display_name as default.
	if ( ! empty( $user->first_name ) && ! empty( $user->last_name ) ) {
		$name = $user->first_name . ' ' . $user->last_name;
	} elseif ( ! empty( $user->billing_first_name ) && ! empty( $user->billing_last_name ) ) {
		$name = $user->billing_first_name . ' ' . $user->billing_last_name;
	} else {
		$name = $user->display_name;
	}

	return preg_replace(
		'/(?<=<span class="name-from-get">).*(?=<\/span>)/',
		" $name",
		$content
	);
}
