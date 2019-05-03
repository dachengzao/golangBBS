import { createConnection, In } from 'typeorm';
import { ConfigService } from '../config/config.service';

const config = new ConfigService();

(async function run() {
    const connection = await createConnection(config.db);
    try {
        await connection.manager.query(`alter table books add column summary varchar(500)`);
        await connection.manager.query(`alter table books add column word_count int default 0`);
        await connection.manager.query(`alter table books add column user_count int default 0`);

        await connection.manager.query(`alter table categories add column follower_count int default 0`);
        await connection.manager.query(`alter table categories add column article_count int default 0`);
        await connection.manager.query(`alter table categories add column cover_url varchar(500)`);

        await connection.manager.query(`CREATE TABLE follower_category (
            user_id int(11) unsigned NOT NULL,
            category_id int(11) unsigned NOT NULL,
            date datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (user_id, category_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

        // await connection.manager.query(`CREATE TABLE userlikearticles (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     user_id int(11) unsigned NOT NULL,
        //     article_id int(11) unsigned NOT NULL,
        //     created_at datetime NOT NULL,
        //     PRIMARY KEY (id)
        // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

        // await connection.manager.query(`CREATE TABLE user_follower (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     user_id int(11) unsigned NOT NULL,
        //     follower_id int(11) unsigned NOT NULL,
        //     created_at datetime NOT NULL,
        //     PRIMARY KEY (id)
        // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

        // const sql = `CREATE TABLE settings (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     editor_type int(11) NOT NULL,
        //     user_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (id),
        //     UNIQUE KEY user_id (user_id)
        // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // const sql = `CREATE TABLE drafts (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     deleted_at datetime DEFAULT NULL,
        //     name varchar(200) NOT NULL,
        //     cover_url varchar(500) DEFAULT NULL,
        //     word_count int(11) unsigned NOT NULL DEFAULT '0',
        //     content text,
        //     html_content text,
        //     content_type int(11) NOT NULL,
        //     user_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (id)
        // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // sql = `CREATE TABLE draft_category (
        //     draft_id int(11) unsigned NOT NULL,
        //     category_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (draft_id, category_id)
        // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`;
        // await connection.manager.query(sql);

        // sql = `CREATE TABLE collections (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     deleted_at datetime DEFAULT NULL,
        //     name varchar(200) NOT NULL,
        //     article_count int(11) unsigned NOT NULL DEFAULT '0',
        //     follower_count int(11) unsigned NOT NULL DEFAULT '0',
        //     announcement varchar(500) DEFAULT '',
        //     allow_post tinyint(1) unsigned NOT NULL DEFAULT '0',
        //     post_must_audit tinyint(1) unsigned NOT NULL DEFAULT '0',
        //     cover_url varchar(500) NOT NULL,
        //     creator_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // sql = `CREATE TABLE article_collection (
        //     article_id int(11) unsigned NOT NULL,
        //     collection_id int(11) unsigned NOT NULL,
        //     status int(11) unsigned NOT NULL,
        //     PRIMARY KEY (article_id, collection_id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // sql = `CREATE TABLE user_collection (
        //     user_id int(11) unsigned NOT NULL,
        //     collection_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (user_id, collection_id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // sql = `CREATE TABLE follower_collection (
        //     user_id int(11) unsigned NOT NULL,
        //     collection_id int(11) unsigned NOT NULL,
        //     date datetime DEFAULT CURRENT_TIMESTAMP,
        //     PRIMARY KEY (user_id, collection_id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // const sql = `CREATE TABLE contributor_collection (
        //     user_id int(11) unsigned NOT NULL,
        //     collection_id int(11) unsigned NOT NULL,
        //     PRIMARY KEY (user_id, collection_id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // const sql = `CREATE TABLE post_message (
        //     id int(11) unsigned NOT NULL AUTO_INCREMENT,
        //     created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     author_id int(11) unsigned NOT NULL,
        //     user_id int(11) unsigned NOT NULL,
        //     article_id int(11) unsigned NOT NULL,
        //     collection_id int(11) unsigned NOT NULL,
        //     status int(11) unsigned NOT NULL,
        //     PRIMARY KEY (id)
        //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;
        // await connection.manager.query(sql);

        // tslint:disable-next-line:no-console
        console.log('done');
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log('Error: ', error);
        process.exit(-1);
    }
}());