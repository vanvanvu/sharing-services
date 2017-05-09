REST APIs Description
---------------------

## REST API - Accounts
### Create account
__Request URL:__ 
> POST  http://localhost:3000/api/Accounts

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
> POST  http://localhost:3000/api/Accounts/login

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
> POST  http://localhost:3000/api/Accounts/logout?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

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
__Request URL:__ http://localhost:3000/api/Accounts/{account_id}/profiles?access_token={token_id}
> GET  http://localhost:3000/api/Accounts/590a00cd71ecab1668e77a29/profiles?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

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
__Request URL:__ http://localhost:3000/api/Accounts/{account_id}/profiles?access_token={token_id}
> PUT  http://localhost:3000/api/Accounts/590a00cd71ecab1668e77a29/profiles?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

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
__Request URL:__ http://localhost:3000/api/Profiles/{profile_id}/Expert?access_token={token_id}
> POST  http://localhost:3000/api/Profiles/591200d7d40b1120f01ccb14/Expert?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

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
__Request URL:__ http://localhost:3000/api/Experts/{profile_id}/Service?access_token={token_id}
> POST  http://localhost:3000/api/Experts/59122ea0b012c327888122ec/Service?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

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
__Request URL:__ http://localhost:3000/api/SearchEngines/general?access_token={token_id}
> GET http://localhost:3000/api/SearchEngines/general?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "searchText": "String"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    experts: [
        0: {
            "expertId": "String",
            "name": "String",
            "fullname": "String",
            "gender": "String(female, male, or ...)",
            "avatarUrl": "String",
            "serviceCount": "number",
            "services": [
                0: {
                    "serviceName": "String",
                    "serviceId": "String"
                },
                1: {...}
            ]
        },
        1: {...},
        2: {...}
    ],
    categories: [
        0: {
            "serviceId": "String",
            "serviceName": "String",
            "brief": "String",
            "thumbnail": "String"
        },
        1: {...},
        2: {...}
    ]
}
```
### Search Experts
__Request URL:__ http://localhost:3000/api/SearchEngines/experts?access_token={token_id}
> GET http://localhost:3000/api/SearchEngines/experts?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "searchText": "String",
  "maxId": "String",
  "count": "number"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    experts: [
        0: {
            "expertId": "String",
            "username": "String",
            "fullname": "String",
            "gender": "String(female, male, or ...)",
            "avatarUrl": "String",
            "serviceCount": "number",
            "services": [
                0: {
                    "serviceName": "String",
                    "serviceId": "String",
                    "brief": "String",
                    "thumbnail": "String"
                },
                1: {...}
            ],
            "ratings": [
                0: {
                    "ownername": "String",
                    "ownerId" "String",
                    "rate": "number",
                    "comment": "String"
                },
                1: {...}
            ]
        },
        1: {...},
        2: {...}
    ]
}
```

### Search Categories
__Request URL:__ http://localhost:3000/api/SearchEngines/categories?access_token={token_id}
> GET http://localhost:3000/api/SearchEngines/experts?access_token=7G3ynXrMpHcMUMel6UQF18GsSZ1qbpAT4a8zUlliSVG3EpgtzCfb7BUI905aA3Nb

__Request body:__ 
```
{
  "searchText": "String",
  "maxId": "String",
  "count": "number"
}
```
__Response status code:__ 
> 200

__Response body:__
```
{
    categories: [
        0: {
            "serviceId": "String",
            "serviceName": "String",
            "brief": "String",
            "thumbnail": "String",
            "experts": [
                0: {
                    "expertId": "String",
                    "name": "String",
                    "fullname": "String",
                    "gender": "String(female, male, or ...)",
                    "avatarUrl": "String"
                },
                1: {...},
                2: {...}
            ]
        },
        1: {...},
        2: {...}
    ]
}
```


