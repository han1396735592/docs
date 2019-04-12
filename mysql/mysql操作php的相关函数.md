> ### `php`操作 `mysql` 的相关函数

| `php` **函数**                                               | 说明               |
| :----------------------------------------------------------- | ------------------ |
| mysql_connect(`$host`,`$username`,`$password`)               | 连接数据库         |
| mysql_select_db(`$dbname`,`$conn`)                           | 选择数据库         |
| mysql_fetch_array(`$result`,`[MYSQL_ASSOC|MYSQL_NUM|MYSQL_BOTH]`) | 获取查询的数据     |
| mysql_fetch_assoc(`$result`)                                 | 获取数据 `key索引` |
| mysql_fetch_row(`$result`)                                   | 获取数据`数字索引` |
| mysql_num_rows(`$result`,`$row`)                             | 数据行数           |
| mysql_data_seek(`$result`)                                   | 获取指定行         |
| mysql_query(`$sql`)                                          | 执行sql语句        |
| mysql_close(`$conn`)                                         | 关闭数据库         |
| mysql_pconnect(`$host`,`$username`,`$password`)              | 长连接到数据库     |

