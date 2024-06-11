let database = {
    cats: [
        {
            name: "Whiskers",
            species: "Domestic Shorthair",
            description:
                "A friendly and curious cat with a sleek, short coat and striking green eyes.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="gray" /><circle cx="35" cy="40" r="5" fill="black" /><circle cx="65" cy="40" r="5" fill="black" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/></svg>',
        },
        {
            name: "Mittens",
            species: "Siamese",
            description:
                "A vocal and affectionate Siamese cat known for its striking blue eyes and cream-colored coat with dark points.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="beige" /><circle cx="35" cy="40" r="5" fill="blue" /><circle cx="65" cy="40" r="5" fill="blue" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><polygon points="50,10 40,40 60,40" fill="darkbrown" /></svg>',
        },
        {
            name: "Shadow",
            species: "Maine Coon",
            description:
                "A large and gentle cat with a long, fluffy coat and a bushy tail. Known for its friendly demeanor and tufted ears.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="darkgray" /><circle cx="35" cy="40" r="5" fill="yellow" /><circle cx="65" cy="40" r="5" fill="yellow" /><path d="M 40 60 Q 50 80 60 60" stroke="black" stroke-width="3" fill="none"/><path d="M 20 20 Q 50 5 80 20" stroke="black" stroke-width="3" fill="darkgray" /></svg>',
        },
        {
            name: "Luna",
            species: "Bengal",
            description:
                "An energetic and playful Bengal cat with a striking spotted coat and an adventurous spirit.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="orange" /><circle cx="35" cy="40" r="5" fill="green" /><circle cx="65" cy="40" r="5" fill="green" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><circle cx="50" cy="70" r="5" fill="brown" /><circle cx="60" cy="60" r="5" fill="brown" /><circle cx="40" cy="60" r="5" fill="brown" /></svg>',
        },
        {
            name: "Cleo",
            species: "Sphynx",
            description:
                "A hairless Sphynx cat with a wrinkled appearance and a loving, social personality.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="pink" /><circle cx="35" cy="40" r="5" fill="blue" /><circle cx="65" cy="40" r="5" fill="blue" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><polygon points="50,10 30,30 70,30" fill="pink" /></svg>',
        },
        {
            name: "Oscar",
            species: "British Shorthair",
            description:
                "A calm and dignified British Shorthair with a round face and plush, dense fur.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="bluegray" /><circle cx="35" cy="40" r="5" fill="orange" /><circle cx="65" cy="40" r="5" fill="orange" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><rect x="40" y="65" width="20" height="5" fill="black" /></svg>',
        },
        {
            name: "Simba",
            species: "Abyssinian",
            description:
                "A playful and active Abyssinian cat with a short, ticked coat and a curious nature.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="goldenrod" /><circle cx="35" cy="40" r="5" fill="amber" /><circle cx="65" cy="40" r="5" fill="amber" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><path d="M 30 20 Q 50 0 70 20" stroke="black" stroke-width="3" fill="goldenrod" /></svg>',
        },
        {
            name: "Bella",
            species: "Persian",
            description:
                "An elegant Persian cat with long, luxurious fur and a sweet, quiet temperament.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /><circle cx="35" cy="40" r="5" fill="blue" /><circle cx="65" cy="40" r="5" fill="blue" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><path d="M 20 20 Q 50 5 80 20" stroke="black" stroke-width="3" fill="white" /></svg>',
        },
        {
            name: "Tiger",
            species: "Savannah",
            description:
                "A striking Savannah cat with a tall, slender build and a coat covered in bold spots and stripes.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="tan" /><circle cx="35" cy="40" r="5" fill="green" /><circle cx="65" cy="40" r="5" fill="green" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><path d="M 30 20 Q 50 5 70 20" stroke="black" stroke-width="3" fill="tan" /><rect x="40" y="65" width="20" height="5" fill="black" /><rect x="45" y="55" width="10" height="5" fill="black" /></svg>',
        },
        {
            name: "Max",
            species: "Ragdoll",
            description:
                "A relaxed and affectionate Ragdoll cat known for its striking blue eyes and silky, semi-long fur.",
            svg_image:
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightgray" /><circle cx="35" cy="40" r="5" fill="blue" /><circle cx="65" cy="40" r="5" fill="blue" /><path d="M 40 60 Q 50 70 60 60" stroke="black" stroke-width="3" fill="none"/><polygon points="50,10 40,40 60,40" fill="lightgray" /></svg>',
        },
    ],
};

module.exports = {database}
