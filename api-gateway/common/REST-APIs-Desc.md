REST APIs Description
---------------------

## Accounts
### POST /accounts
Create a new user account 

__Request URL:__ 
> http://localhost:3000/api/accounts

__Request body:__ 
```
{
  "username": "vantest4",
  "email": "test4@test.com",
  "password": "test"
  "fullname": "",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "status": "string",
  "expert_title": "string"
}
```
> Require: username, email, password, fullname

__Response body:__
```
{
  "fullname": "van van vu",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "expert_title": ""
  "service_count": 0,
  "username": "vanvv",
  "email": "vanvv@test.com",
  "id": "592f53c25b84c030d0ddb8b0"
}
```

### POST /accounts/login
Login a user with username/email and password. 

__Request URL:__ 
> http://localhost:3000/api/accounts/login

__Request body:__ 
```
{
    "email": "String", 
    "password": "****"
}
```

__Response body:__
```
{
  "id": "7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb",
  "ttl": 1209600,
  "created": "2014-12-23T08:31:33.464Z",
  "userId": "Sting"
}
```
### POST /accounts/logout
Logout a user with access token.

__Request URL:__ 
> http://localhost:3000/api/accounts/logout?access_token={token_id}

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

### GET /accounts/{id}
Get information about a user by id

__Request URL:__ 
> http://localhost:3000/api/accounts/{account_id}?access_token={token_id}

__Request body:__ 
```
{}
```

__Response body:__
```
{
  "fullname": "luxefoodanapa full-name",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "expert_title": "",
  "service_count": 0,
  "username": "luxefoodanapa",
  "email": "luxefoodanapa@test.com",
  "id": "59270b963ad4d205e07c04a7"
}
```

### PUT /accounts/{id}
Edit attributes for a user account 

__Request URL:__ 
> http://localhost:3000/api/accounts/{account_id}?access_token={token_id}

__Request body:__ 
```
{
  "fullname": "",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "status": "string",
  "expert_title": "string"
}
```

__Response body:__
```
{
  "fullname": "luxefoodanapa full-name",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "expert_title": "",
  "service_count": 0,
  "username": "luxefoodanapa",
  "email": "luxefoodanapa@test.com",
  "id": "59270b963ad4d205e07c04a7"
}
```

## GET /accounts/recommend 
Get a list of recommended experts for user

__Request URL:__
> http://localhost:3000/api/accounts/recommend?maxId={index}&count={count_number}&access_token={token_id}

__Request body:__ 
```
{}
```

__Response body:__
```
{
    "results": [
        0: {
            "username": "string",
            "fullname": "string",
            "expert_title": "string",
            "avatar_url": "string",
            "location": "string",
            "rating": 0,
            "id": "59270b963ad4d205e07c04a7"
        },
        1: {...},
        2: {...}
    ]
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

## REST API - Get recommanded categories
__Request URL:__
__Request body:__ 
```
{}
```
__Response status code:__
 > 200
 
__Response body:__
```
{
    "results": [
        0: {
            "category": "string",
            "sub_category": "string",
            "image_url": "string",
            "desc": "string",
            "layer_color": "string"
        },
        1: {...},
        2: {...}
    ]
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


