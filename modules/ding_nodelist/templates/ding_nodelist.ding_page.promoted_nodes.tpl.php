<?php

/**
 * @file
 * Ding event promoted nodes template.
 */

$position = ($class[0] == 'first' && $class[1] == 'left' || $class[0] == 'last' && $class[1] == 'right');
$classes = array("ding_nodelist-pn-item");
$classes[] = (empty($item->image) ? 'no-bgimage' : NULL);
$classes[] = (isset($item->video) ? 'has-video' : NULL);
$classes = implode(" ", $classes);
?>
<div
  class="<?php print $classes; ?>"
  <?php if (!empty($item->image) && $position) : ?>
    style="background-image: url(<?php print $item->image; ?>);"
  <?php endif; ?>
>
  <?php if (isset($item->video)) : ?>
    <div class="media-container">
      <div class="media-content"
           data-url="<?php print $item->video; ?>"></div>
      <div class="pn-close-media"><i class="icon-cross"></i></div>
    </div>
  <?php endif; ?>
  <?php if (!empty($item->image)) : ?>
    <?php if (!$position): ?>
      <div class="nb-image" style="background-image:url(<?php print $item->image; ?>);"></div>
    <?php endif; ?>
  <?php endif; ?>
  <div class="page-info">
    <h3><?php print l($item->title, 'node/' . $item->nid); ?></h3>
    <div class="item-body"><?php print $item->teaser_lead; ?></div>
    <div class="read-more">
      <?php print l(t('Read more'), 'node/' . $item->nid); ?>
    </div>
    <?php if (isset($item->video)) : ?>
      <div class='pn-media-play'>
        <div class='pn-play pn-round'><i class='icon-play'></i></div>
      </div>
    <?php endif; ?>
  </div>
</div>
