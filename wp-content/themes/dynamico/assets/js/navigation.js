/* global dynamicoScreenReaderText */
/**
 * Theme Navigation
 *
 * @package Dynamico
 */

(function( $ ) {

	function initNavigation( containerClass, naviClass ) {
		var container  = $( containerClass );
		var navigation = $( naviClass );

		// Return early if navigation is missing.
		if ( ! navigation.length ) {
			return;
		}

		// Enable menuToggle.
		(function() {
			var menuToggle = container.find( '.menu-toggle' );

			// Return early if menuToggle is missing.
			if ( ! menuToggle.length ) {
				return;
			}

			// Add an initial value for the attribute.
			menuToggle.attr( 'aria-expanded', 'false' );

			menuToggle.on( 'click.dynamico_', function() {
				navigation.toggleClass( 'toggled-on' );

				$( this ).attr( 'aria-expanded', navigation.hasClass( 'toggled-on' ) );
			});
		})();

		// Enable dropdownToggles that displays child menu items.
		(function() {

			var dropdownToggle = $( '<button />', { 'class': 'dropdown-toggle', 'aria-expanded': false } )
				.append( dynamicoScreenReaderText.icon )
				.append( $( '<span />', { 'class': 'screen-reader-text', text: dynamicoScreenReaderText.expand } ) );

			navigation.find( '.menu-item-has-children > a, .page_item_has_children > a' ).after( dropdownToggle );

			// Set the active submenu dropdown toggle button initial state.
			navigation.find( '.current-menu-ancestor > button' )
				.addClass( 'toggled-on' )
				.attr( 'aria-expanded', 'true' )
				.find( '.screen-reader-text' )
				.text( dynamicoScreenReaderText.collapse );

			// Set the active submenu initial state.
			navigation.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );

			navigation.find( '.dropdown-toggle' ).click( function( e ) {
				var _this = $( this ),
					screenReaderSpan = _this.find( '.screen-reader-text' );

				e.preventDefault();
				_this.toggleClass( 'toggled-on' );
				_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );

				_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

				screenReaderSpan.text( screenReaderSpan.text() === dynamicoScreenReaderText.expand ? dynamicoScreenReaderText.collapse : dynamicoScreenReaderText.expand );
			} );
		})();

		// Fix sub-menus for touch devices and better focus for hidden submenu items for accessibility.
		(function() {
			var menuList   = navigation.children( 'ul.menu' );

			if ( ! menuList.length || ! menuList.children().length ) {
				return;
			}

			// Toggle `focus` class to allow submenu access on tablets.
			function toggleFocusClassTouchScreen() {
				if ( 'none' === $( '.menu-toggle' ).css( 'display' ) ) {

					$( document.body ).on( 'touchstart.dynamico_', function( e ) {
						if ( ! $( e.target ).closest( naviClass + ' li' ).length ) {
							$( naviClass + ' li' ).removeClass( 'focus' );
						}
					});

					menuList.find( '.menu-item-has-children > a, .page_item_has_children > a' )
						.on( 'touchstart.dynamico_', function( e ) {
							var el = $( this ).parent( 'li' );

							if ( ! el.hasClass( 'focus' ) ) {
								e.preventDefault();
								el.toggleClass( 'focus' );
								el.siblings( '.focus' ).removeClass( 'focus' );
							}
						});

				} else {
					menuList.find( '.menu-item-has-children > a, .page_item_has_children > a' ).unbind( 'touchstart.dynamico_' );
				}
			}

			if ( 'ontouchstart' in window ) {
				$( window ).on( 'resize.dynamico_', toggleFocusClassTouchScreen );
				toggleFocusClassTouchScreen();
			}

			menuList.find( 'a' ).on( 'focus.dynamico_ blur.dynamico_', function() {
				$( this ).parents( '.menu-item, .page_item' ).toggleClass( 'focus' );
			});
		})();
	}

	// Init Main Navigation.
	initNavigation( '.primary-navigation-wrap', '.main-navigation' );

	// Init Top Navigation.
	initNavigation( '.header-bar', '.top-navigation' );

})( jQuery );
