Return json structure
---------------------

## Searching User Expert

```angular2html
{
    experts: [
        0: {
            "expertId": "String",
            "username": "String",
            "fullname": "String",
            "gender": "String(female, male, or ...)",
            "avatarUrl": "String",
            "services": [
                "serviceName": "String",
                "serviceId": "String",
                "brief": "String",
                "thumbnail": "String"
            ],
            "brief": "String",
            "rating": 0->5
        },
        1: {...},
        2: {...}
    ],
    categories: [
        0: {
            "serviceId": "String",
            "service": "String",
            "brief": "String",
            "thumbnail": "String",
            "experts": [
                0: {
                    "expertId": "String",
                    "username": "String",
                    "fullname": "String",
                    "gender": "String(female, male, or ...)",
                    "avatarUrl": "String",
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
