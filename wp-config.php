<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Drawingcolours' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A$lTn?]fbK)Sf3tqIWx#/Ka/2,1<)8Xx$ Sky)1]`iuH$N8Zwjl2uSz_,]h`f9%O' );
define( 'SECURE_AUTH_KEY',  'uMRbM?:db~tCqEC^RL7|kNi0+)Q!Y!?Q+$oVpG-ir4WzG4ms tMP#Z0u;(wl7tR<' );
define( 'LOGGED_IN_KEY',    'eO9o.7a~QHH7HZ1)~:^zu_]3^kAD18YVyuj&qann}IJB=Nx/v ?|Jqa<cOs!|JRZ' );
define( 'NONCE_KEY',        ')KGE5u?~T:ke#MGQiX4@wEl9ytx6[*ewr)_(4T:cFIiU HG1lh7jc7K !w@eZw52' );
define( 'AUTH_SALT',        'Q)^FNU#v+W9PMN1=Zt%Sipt5TM8)$Tt`$h|r`xt?7_[JT+4olp}Z4?jo*_1l4yB:' );
define( 'SECURE_AUTH_SALT', '7:^W_g3v8U&TROwx=@Ltux/w++V1e>W$2sLc%O1S=NtAa-tZ2GAb=@]CKS<z}n4:' );
define( 'LOGGED_IN_SALT',   '-&Tu/b%Xj$;AO5/hgi]:GsaCnss9jPNciC)8)f1pI=uy85>:M2Hyxr0^Y,D%J0S-' );
define( 'NONCE_SALT',       'u&5hvsuM5f9;^`!lf?BnzVFYYDdozRA/#C?9=S#jzW#Wvca=p<%UJ.%?vS{>7mW?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
