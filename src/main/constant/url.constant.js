export const menu = [
    {
        label: 'Dashboard',
        icon: 'fa fa-home',
        url: '',
        children: []
    },
    {
        label: 'Configuration',
        icon: 'fa fa-home',
        url: '/configuration',
        children: [
            {
                label: 'Item',
                icon: 'fa fa-square',
                url: '/configuration/item',
                children: [
                            {
                                label: 'Phone',
                                icon: 'fa fa-square',
                                url: '/configuration/item/phone',
                                children: [],
                            },
                            {
                                label: 'Laptop',
                                icon: 'fa fa-square',
                                url: '/configuration/item/laptop',
                                children: [],
                            }
                        
                    
                ],
            },
            {
                label: 'Category',
                icon: 'fa fa-square',
                url: '/configuration/category',
                children: [],
            }
        ]
    },

]

