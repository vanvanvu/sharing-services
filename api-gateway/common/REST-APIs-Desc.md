REST APIs Description
---------------------

## Tutorial
### GET /starting
Get Tutors 

__Request URL__
> http://localhost:3000/api/startings/tutor?index=0

__Respond body__
```
{
    "title_image": " ",
    "title_video": " ",
    "title_attribute": {
        "font": "",
        "color": ""
    },
    "image_desc": " ",
    "video_desc": " ",
    "desc_attribute": {
        "font": "",
        "color": ""
    },
    "layer_color": " ",
    "image_url": " ",
    "video_url": " ",
    "id": "string"
}
```

## Accounts
### POST /accounts
Create a new user account 

__Request URL:__ 
> http://localhost:3000/api/accounts

__Request body:__ 
```
{
  "username": "vanvv",
  "email": "vanvv@test.com",
  "password": "test"
  "fullname": "van van vu"
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
  "userId": "592f53c25b84c030d0ddb8b0"
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
    "username": "luxefoodanapa",
    "email": "luxefoodanapa@test.com",
    "id": "59270b963ad4d205e07c04a7"
    "fullname": "luxefoodanapa full-name",
    "avatar_url": "",
    "gender": "",
    "biography": "",
    "website": "",
    "expert_title": "",
    "price": "",
    "level": "",
    "rating": 0,
    "geo_name": "",
    "geo_country": "",
    "geo_latitude": "",
    "geo_longtitude": ""
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
  "expert_title": "string",
  "geo_name": "",
  "geo_country": "",
  "geo_latitude": "",
  "geo_longtitude": "",
  "price": ""
}
```

__Response body:__
```
{
  "username": "luxefoodanapa",
  "email": "luxefoodanapa@test.com",
  "id": "59270b963ad4d205e07c04a7"
  "fullname": "luxefoodanapa full-name",
  "avatar_url": "",
  "gender": "",
  "biography": "",
  "website": "",
  "expert_title": "",
  "geo_name": "",
  "geo_country": "",
  "geo_latitude": "",
  "geo_longtitude": "",
  "price": ""
}
```

## GET /accounts/recommend 
Get a list of recommended experts for user

__Request URL:__
> http://localhost:3000/api/accounts/recommend?start={index}&count={count_number}&access_token={token_id}

__Request body:__ 
```
{}
```

__Response body:__
```
{
    "result": [
        0: {
            "fullname": "jogjaeatguide full-name",
            "avatar_url": "",
            "gender": "",
            "biography": "",
            "website": "",
            "expert_title": "Marine Biologist",
            "descs": "",
            "price": "",
            "level": " ",
            "rating": 0,
            "geo_name": " ",
            "geo_country": "",
            "geo_latitude": " ",
            "geo_longtitude": 0,
            "username": "jogjaeatguide",
            "email": "jogjaeatguide@test.com",
            "id": "593b2f709699833e34fa17d4",
            "desc": "Meet Chris Meyer, a scientist from the National Museum of Natural History. He talks about the ocean and his favorite animal the cowrie snail."
        },
        1: {...},
        2: {...}
    ]
}
```

## POST /accounts/{id}/categories 
Create a new service of user

__Request URL:__ 
> http://localhost:3000/api/accounts/{account_id}/categories?access_token={token_id}

__Request body:__ 
```
{
  "category": "Instrument Tutor",
  "subcategory": "piano",
  "brief": "somthings",
  "image_url": "abc",
  "tag": "#pianovanvv"
}
```

__Response body:__
```
{
  "category": "Instrument Tutor",
  "subcategory": "piano",
  "display_attribute": {
    "font": "",
    "color": ""
  },
  "layer_color": " ",
  "brief": "somthings",
  "image_url": "abc",
  "tag": "#pianovanvv",
  "id": "5930a99f9dd3cc15e8a134db",
  "account_id": "592f53c25b84c030d0ddb8b0"
}
```

## PUT /accounts/{id}/categories/{fk} 
Edit information services of user

__Request URL:__ 
> http://localhost:3000/api/accounts/{account_id}/categories/{category_id}?access_token={token_id}

__Request body:__ 
```
{
  "brief": "somthings",
  "image_url": "abc",
  "tag": "#pianovanvv"
}
```

__Response body:__
```
{
  "category": "Instrument Tutor",
  "subcategory": "guitar",
  "display_attribute": {},
  "layer_color": " ",
  "brief": "tutorial guitar",
  "image_url": "def",
  "level": " ",
  "price": " ",
  "rating": 0,
  "tag": "#guitarvanvv",
  "id": "5930a99f9dd3cc15e8a134db",
  "account_id": "592f53c25b84c030d0ddb8b0"
}
```

## GET /categories/recommend  
Get recommanded categories

__Request URL:__
> http://localhost:3000/api/categories/recommend?start={index}&count={count_number}&access_token={token_id}


__Request body:__ 
```
{}
```

__Response body:__
```
{
    "result": [
        0: {
            "category": "string",
            "subcategory": "string",
            "image_url": "string",
            "brief": "string",
            "layer_color": "string",
            "display_attribute": {
                "font": "",
                "color": ""
            }
        },
        1: {...},
        2: {...}
    ]
}
```

## GET /searchEngines/general 
Get a list of experts or categories by text-search

__Request URL:__ 
> http://localhost:3000/api/searchEngines/general?searchText={text}&start={Idx}&count={count}&access_token={token_id}

__Request body:__ 
```
{}
```

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
    "expert_title": "",
    "biography": "",
    "avatar_url": "",
    "status": "",
    "price": "",
    "level": "",
    "rating": "",
    "location": {
        "name": "",
        "country": "",
        "latitude": "",
        "longitude": ""
    }
}

_type = "categories"
"_data": {
    "category": "String",
    "subcategory": "String",
    "brief": "String",
    "image_url": "String",
    "layer_color": "String",
    "display_attribute": {
        "font": "",
        "color": ""
    }
}
```
### GET /searchEngines/experts
Get a list of experts by text-search

__Request URL:__ 
> http://localhost:3000/api/searchEngines/experts?searchText={text}&start={Idx}&count={count}&access_token={token_id}


__Request body:__ 
```
{}
```

__Response body:__
```
{
    "result": [
        0: {
            "_type": "accounts",
            "_id": "",
            "_data": {
                "username": "",
                "fullname": "",
                "expert_title": "",
                "biography": "",
                "avatar_url": "",
                "status": "",
                "price": "",
                "level": "",
                "rating": "",
                "location": {
                    "name": "",
                    "country": "",
                    "latitude": "",
                    "longitude": ""
                }
            }
        },
        1: {...},
        2: {...}
    ]
}
```

### GET /searchEngines/categories
__Request URL:__ 
> http://localhost:3000/api/searchEngines/categories?searchText={text}&start={Idx}&count={count}&access_token={token_id}

__Request body:__ 
```
{}
```

__Response body:__
```
{
    "result": [
        0: {
            "_type": "categories",
            "_id": "",
            "_data": {
                "category": "String",
                "subcategory": "String",
                "brief": "String",
                "image_url": "String",
                "layer_color": "String",
                "display_attribute": {
                    "font": "",
                    "color": ""
                }
            }
        },
        1: {...},
        2: {...}
    ]
}
```

## POST /accounts/{id}/comments
Create a comment for a user

__Request URL:__
> http://localhost:3000/api/accounts/{account_id}/comments?access_token={token_id}

__Request body:__ 
```
{
  "text": "Awesome expert",
  "rating": 5
}
```

__Response body:__
```
{
  "rating": 5,
  "text": "Awesome expert",
  "created_time": "2017-06-08T02:34:42.590Z",
  "creator_id": "5937ef898aa10dbccb6c2f2f",
  "creator_avatar": "",
  "creator_name": "vanvv",
  "updated_time": "2017-06-08T02:34:42.590Z",
  "id": "5938b7da2b7bca732fbd68e4",
  "account_id": "5937f52f4b895705a6f4813b"
}
```

## GET /accounts/{id}/listComments 
Get list of comments' user

__Request URL:__
> http://localhost:3000/api/accounts/listComments?start={index}&count={count_number}&access_token={token_id}

__Request body:__ 
```
{}
```

__Response body:__
```
{
   "result": [
       0: {
            "rating": "",
            "text": "",
            "created_time": "",
            "creator_id": "",
            "creator_avatar": "",
            "creator_name": "",
            "updated_time": "",
            "id": "",
            "account_id": ""
        },
       1: {...}
    ]
}
```


