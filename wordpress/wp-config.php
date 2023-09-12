<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'headless_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'Rahul21896' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{>c8exXqQ#fw[RX82~-@c QX6#Tf0&B?4>Ay0MFT?P*_E1TK+O n:dwZovO&]KJe' );
define( 'SECURE_AUTH_KEY',  'fj)0Yyf:yT_8[l%u)<a)OO)(u$0:ZHljb|4#BW1m_JbcR$d(n:}&J$)&]DmM_k[W' );
define( 'LOGGED_IN_KEY',    'X:[%H%R2|x,BS`{?H ##Js_]i{{_@9cxIp0w=i>+%4qKEmJL.Av5g]y,)H$knyCb' );
define( 'NONCE_KEY',        '&q2d[*Uml27zs_L!,G)H[4z,$XX@[cy9tS(4t1B+:H{rW@CO4*yW_xV>U`L1i6^a' );
define( 'AUTH_SALT',        'S&iU32Au45,;%e,Cq_BT(Gb|E]*!U)7|uai@Vgo~`w>V,:&49Aw06QIyOaTjrW65' );
define( 'SECURE_AUTH_SALT', 'Bs{(h&xGr9SknZfzZp,GKr!Kz_tf~+)fq)q*0*&j];oGe2u|6iJXk)le!t1DSYDF' );
define( 'LOGGED_IN_SALT',   'pb91}(L3VtyuVe6Cf~fRKQ4B<6##O;/V+~6BEMK|I[91JS-bn_^:[,[eCfeZ9RQP' );
define( 'NONCE_SALT',       'VhizJ]#-Pw+3MfLU0uN{Mz 1Bt;EIVkar WmztGRxr]d#9>(!FV3%d<@xG2d)wPj' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'hp_';

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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
