Starting Database
---------------------

## Start standalone mode
```
mongod --dbpath data/db
```

## Start Replicate mode
```
mongod --replSet "rs0"
mongo
rs.initiate()
rs.conf()
pip install elastic-doc-manager[elastic2]
pip install mongo-connector
mongo-connector -m localhost:27017 -t localhost:9200 -d elastic2_doc_manager -v 
mongo-connector -m 172.33.47.10:28001 -t 172.33.47.10:28002 -d elastic2_doc_manager -v
```