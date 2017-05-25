REST APIs Description
---------------------

## REST API - Accounts
### Create account
__Request URL:__ 
> POST  http://localhost:3000/api/accounts

__Request body:__ 
```
{
  "username": "vantest4",
  "email": "test4@test.com",
  "password": "test"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "username": "vantest4",
  "email": "test4@test.com",
  "id": "591200d7d40b1120f01ccb13"
}
```

### Login
__Request URL:__ 
> POST  http://localhost:3000/api/accounts/login

__Request body:__ 
```
{
    "email": "String", 
    "password": "****"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "id": "7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb",
  "created": "2014-12-23T08:31:33.464Z",
  "userId": "Sting"
}
```
### Logout
__Request URL:__ 
> POST  http://localhost:3000/api/accounts/logout?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{}
```
__Response status code:__ 
> 204

__Response body:__
```
{}
```
## REST API - Profiles
### Get profile
__Request URL:__ http://localhost:3000/api/accounts/{account_id}/profiles?access_token={token_id}
> GET  http://localhost:3000/api/accounts/590a00cd71ecab1668e77a29/profiles?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "username": "vanvan",
  "fullname": "van van vu",
  "avatarUrl": "",
  "isFemale": false,
  "isExpert": true,
  "biology": "None",
  "status": "online",
  "id": "590a00cd71ecab1668e77a2a",
  "accountId": "590a00cd71ecab1668e77a29"
}
```

### Edit profile
__Request URL:__ http://localhost:3000/api/accounts/{account_id}/profiles?access_token={token_id}
> PUT  http://localhost:3000/api/accounts/590a00cd71ecab1668e77a29/profiles?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "fullname": "test name",
  "avatarUrl": "http://abc.com/myavatar",
  "isFemale": false,
  "isExpert": false,
  "biology": "yolo",
  "status": "offline"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "username": "vanvan",
  "fullname": "test nama",
  "avatarUrl": "http://abc.com/myavatar",
  "isFemale": false,
  "isExpert": true,
  "biology": "yolo",
  "status": "offline",
  "id": "590a00cd71ecab1668e77a2a",
  "accountId": "590a00cd71ecab1668e77a29"
}
```
### Set Expert mode
__Request URL:__ http://localhost:3000/api/profiles/{profile_id}/Expert?access_token={token_id}
> POST  http://localhost:3000/api/profiles/591200d7d40b1120f01ccb14/Expert?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "serviceCount": 0
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "serviceCount": 0,
  "id": "59122ea0b012c327888122ec",
  "profileId": "591200d7d40b1120f01ccb14"
}
```

## REST API - Experts
## Add service
__Request URL:__ http://localhost:3000/api/experts/{expert_id}/service?access_token={token_id}
> POST  http://localhost:3000/api/experts/59122ea0b012c327888122ec/service?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "name": "testService",
  "brief": "Test service",
  "thumbnailUrl": "string",
  "imageUrl": "string"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "name": "testService",
  "brief": "Test service",
  "thumbnailUrl": "string",
  "imageUrl": "string",
  "id": "591233c6b012c327888122ed",
  "expertId": "59122ea0b012c327888122ec"
}
```

## REST API - Search-Engine
### General search
__Request URL:__ http://localhost:3000/api/searchEngines/general?searchText={text}&maxId={Idx}&count={count}
> curl -X GET --header "Accept: application/json" "http://localhost:3000/api/searchEngines/general?searchText=c&maxId=0&count=20"

__Request body:__ 
```
{}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    "result": [
        0: {
            "_type": "",
            "_id": "",
            "_data": {
            }
        },
        1: {...},
        2: {...}
    ]
}
```
 
```
_type = 'profiles'
"_data": {
    "username": "",
    "fullname": "",
    "status": "off_line",
    "biology": "",
    "avatarUrl": "",
    "isExpert": true,
    "isFemale": false
}

_type = "categories"
"_data": {
    "servicename": "String",
    "brief": "String",
    "thumbnailUrl": "String",
    "expertId": "String"
}
```
### Search Experts
__Request URL:__ http://localhost:3000/api/searchEngines/experts?searchText={text}&maxId={Idx}&count={count}

> curl -X GET --header "Accept: application/json" "http://localhost:3000/api/searchEngines/experts?searchText=s&maxId=0&count=100"

__Request body:__ 
```
{}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    "result": [
        0: {
            "_type": "profiles",
            "_id": "",
            "_data": {
                "username": "String",
                "fullname": "String",
                "status": "off_line",
                "biology": "String",
                "avatarUrl": "String",
                "isExpert": true,
                "isFemale": false
            }
        },
        1: {...},
        2: {...}
    ]
}
```

### Search Categories
__Request URL:__ http://localhost:3000/api/searchEngines/categories?searchText={text}&maxId={Idx}&count={count}
> curl -X GET --header "Accept: application/json" "http://localhost:3000/api/searchEngines/categories?searchText=s&maxId=0&count=100"

__Request body:__ 
```
{}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    "result": [
        0: {
            "_type": "categories",
            "_id": "",
            "_data": {
                "servicename": "String",
                "brief": "String",
                "thumbnailUrl": "String",
                "expertId": "String"
            }
        },
        1: {...},
        2: {...}
    ]
}
```


