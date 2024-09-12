export const commentsData = [
    {
        name: "Aditya Saini",
        text: "this is the comment by aditya",
        replies: [
            {
                name: "Karan kumar",
                text: "this is reply to aditya",
                replies: [],
            },
            {
                name: "Karan kumar",
                text: "this is reply to aditya",
                replies: [],
            },
            {
                name: "Karan kumar",
                text: "this is reply to aditya",
                replies: [],
            }
        ]
    },
    {
        name: "Bruce banner",
        text: "this is the comment by Bruce",
        replies: [
            {
                name: "Ekansh",
                text: "this is reply to bruce by ekansh",
                replies: [
                    {
                        name: "Ishaan",
                        text: "this is reply to ekansh by ishaan via bruce",
                        replies: [
                            {
                                name: "Paramnoor",
                                text: "this is reply to Ishaan N nested",
                                replies: []
                            }
                        ]
                    }
                ],
            },
            {
                name: "Karan kumar",
                text: "this is reply to bruce by karan",
                replies: [],
            }
        ]
    }
]