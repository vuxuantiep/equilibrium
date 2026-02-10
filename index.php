<?php
/**
 * Equilibrium Foundation Theme Entry
 */
get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php 
        // Lade die statische HTML-Datei als Template
        include( get_template_directory() . '/index.html' ); 
        ?>
    </main>
</div>

<?php get_footer(); ?>