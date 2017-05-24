Setup environment
===============================

## Database
```
mongod --replSet "rs0"
mongo
rs.initiate()
rs.conf()
pip install elastic-doc-manager[elastic2]
pip install mongo-connector
mongo-connector -m localhost:27017 -t localhost:9200 -d elastic2_doc_manager -v 
```