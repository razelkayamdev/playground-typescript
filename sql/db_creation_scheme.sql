CREATE TABLE `share` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sharing_user_id` int(10) unsigned NOT NULL,
  `site_id` int(10) unsigned NOT NULL,
  `cycle_id` int(10) unsigned NOT NULL,
  `unique_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`unique_id`),
  INDEX (`unique_id`, `sharing_user_id`)
);

