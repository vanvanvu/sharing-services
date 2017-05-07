Return json structure
---------------------

## Searching User Expert

```angular2html
{
    experts: [
        0: {    
            "username": "String",
            "fullname": "String",
            "gender": "String(female, male, or ...)",
            "avatarUrl": "String",
            "service": "String",
            "brief": "String",
            "rating": 0->5
        },
        1: {...},
        2: {...}
    ],
    categories: [
        0: {
            "sevice": "String",
            "brief": "String",
            "thumbnail": "String",
            "experts": [
                0: {    
                    "username": "String",
                    "fullname": "String",
                    "gender": "String(female, male, or ...)",
                    "avatarUrl": "String",
                    "service": "String",
                    "brief": "String",
                    "rating" 0->5
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
