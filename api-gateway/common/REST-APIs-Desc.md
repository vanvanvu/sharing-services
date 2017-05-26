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
__Request URL:__ http://localhost:3000/api/accounts/{account_id}
> curl -X GET --header "Accept: application/json" "http://localhost:3000/api/accounts/59270b963ad4d205e07c04a7"



__Request body:__ 
```
{}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "fullname": "luxefoodanapa fullname",
  "avatarUrl": "",
  "isFemale": false,
  "isExpert": true,
  "serviceCount": 1,
  "username": "luxefoodanapa",
  "email": "luxefoodanapa@test.com",
  "id": "59270b963ad4d205e07c04a7"
}
```

### Edit profile
__Request URL:__ http://localhost:3000/api/accounts/{account_id}?access_token={token_id}
> curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"fullname\": \"luxefoodanapa fullname\"
}" "http://localhost:3000/api/accounts/59270b963ad4d205e07c04a7?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"


__Request body:__ 
```
{
  "fullname": "test name",
  "avatarUrl": "http://abc.com/myavatar",
  "isFemale": false,
  "isExpert": false,
  "biology": "yolo",
  "serviceCount: number
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "fullname": "luxefoodanapa fullname",
  "avatarUrl": "",
  "isFemale": false,
  "isExpert": true,
  "serviceCount": 1,
  "username": "luxefoodanapa",
  "email": "luxefoodanapa@test.com",
  "id": "59270b963ad4d205e07c04a7"
}
```
### Enable Expert mode
__Request URL:__ http://localhost:3000/api/accounts/{account_id}?access_token={token_id}
> curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"isExpert\": true
}" "http://localhost:3000/api/accounts/59270b963ad4d205e07c04a7?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"

__Request body:__ 
```
{
  "isExpert": true
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

## REST API - Add services
__Request URL:__ http://localhost:3000/api/accounts/{account_id}/categories?access_token={token_id}

> curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"servicename\": \"Psychology\",
  \"brief\": \"Giving demand for teen\",
  \"thumbnailUrl\": \"link-to-image\"
}" "http://localhost:3000/api/accounts/59270b963ad4d205e07c04a7/categories?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"

__Request body:__ 
```
{
  "name": "testService",
  "brief": "Test service",
  "thumbnailUrl": "string"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "servicename": "Psychology",
  "brief": "Giving demand for teen",
  "thumbnailUrl": "link-to-image",
  "id": "5927a041456f6047884b0641",
  "accountId": "59270b963ad4d205e07c04a7"
}
```

## REST API - Edit information services
__Request URL:__ http://localhost:3000/api/categories/{service_id}?access_token={token_id}


> curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"brief\": \"new brief\"
}" "http://localhost:3000/api/categories/5927a041456f6047884b0641?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"

__Request body:__ 
```
{
    "servicename": "string",
    "brief": "string",
    "thumbnailUrl": "string"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "servicename": "Psychology",
  "brief": "new brief",
  "thumbnailUrl": "link-to-image",
  "id": "5927a041456f6047884b0641",
  "accountId": "59270b963ad4d205e07c04a7"
}
```

## REST API - Add ratings
__Request URL:__ http://localhost:3000/api/accounts/{account_id}/ratings?access_token={token_id}

> curl -X POST --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"comment\": \"Awesome expert\",
  \"rate\": 5,
  \"ownername\": \"luxefoodanapa\"
}" "http://localhost:3000/api/accounts/59270b963ad4d205e07c04a7/ratings?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"

__Request body:__ 
```
{
  "comment": "Awesome expert",
  "rate": 5,
  "ownername": "luxefoodanapa"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "comment": "Awesome expert",
  "rate": 5,
  "ownername": "luxefoodanapa",
  "id": "5927a88e8d4df80994f00014",
  "accountId": "59270b963ad4d205e07c04a7"
}
```

## REST API - Edit Ratings
__Request URL:__ http://localhost:3000/api/ratings/{rate_id}?access_token={token_id}

> curl -X PUT --header "Content-Type: application/json" --header "Accept: application/json" -d "{
  \"rate\": 3
}" "http://localhost:3000/api/ratings/5927a88e8d4df80994f00014?access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU&access_token=20H9i0Wh4qaQRAAmsWV3QpVMuhR89eeVOjp18JBEBFvh8BPI4qvNrngOa4rie6VU"

__Request body:__ 
```
{
    "comment": "string",
    "rate": number
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
  "comment": "Awesome expert",
  "rate": 3,
  "ownername": "luxefoodanapa",
  "id": "5927a88e8d4df80994f00014",
  "accountId": "59270b963ad4d205e07c04a7"
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
_type = 'accounts'
"_data": {
    "username": "",
    "fullname": "",
    "biology": "",
    "avatarUrl": "",
    "isExpert": true,
    "isFemale": false,
    "status": ""
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
            "_type": "accounts",
            "_id": "",
            "_data": {
                "username": "String",
                "fullname": "String",
                "status": "",
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


