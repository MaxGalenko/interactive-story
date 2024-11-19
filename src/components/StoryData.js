const segments = [
    {
        // index: 0
        // introduction
        text: "Deep in the heart of Ravenwood Forest lies an old, abandoned cabin that locals say is cursed. For decades, whispers of a malevolent spirit have circulated among the townsfolk, warning adventurous souls to steer clear. But curiosity often gets the better of the brave, and a group of friends—Evelyn, Mark, Sarah, and Jake—decide to spend a weekend at the cabin to prove the legends wrong. As twilight descends and the shadows stretch long, the friends gather around a flickering campfire, laughter echoing into the darkness. Yet, an uneasy chill in the air reminds them that they’re not alone. As the friends sit around the campfire, the whispers grow louder, intertwining with the rustling leaves. Mark suggests investigating the source, his curiosity igniting an adventurous spark. “It could just be the wind,” Sarah counters, her voice trembling. Evelyn glances at the cabin, its shadowy outline looming ominously. Jake, ever the skeptic, dismisses the fear. “What’s the worst that could happen?”",
        choices: [
            {text: "Investigate the whispers.", nextSegment: 1},
            {text: "Stay inside the cabin.", nextSegment: 5}
        ]
    },
    {
        // index: 1
        // The player chose to Investigate the whispers
        text: "The friends venture into the dark woods, following the whispers that seem to beckon them closer. As they wander deeper, the air grows colder, and shadows flit between the trees. They discover an ancient tree with carvings etched into its bark—a warning left by those who disappeared before them. Suddenly, the whispers turn into frantic screams.",
        choices: [
            {text: "Try to decipher the carvings.", nextSegment: 2},
            {text: "Turn back to the cabin.", nextSegment: 4}
        ]
    },
    {
        // index: 2
        // The player chose to Try to decipher the carvings
        text: "As they examine the carvings, they realize they tell the story of a tragic betrayal. The trees seem to close in around them, the air thick with dread. Mark notices that the screams are growing louder, almost desperate.",
        choices: [
            {text: "Keep studying the carvings.", nextSegment: 3},
            {text: "Run back to the cabin.", nextSegment: 4}
        ]
    },
    {
        // index: 3
        // The player chose to Keep studying the carvings
        // Ending: The Forest's Embrace
        text: "Compelled to understand, the friends delve deeper into the carvings, but the whispers morph into wails of despair. As they are drawn in, the spirit appears, unleashing its wrath. One by one, they vanish, lost to the forest's dark embrace, their screams joining the cacophony of the damned.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 4
        // The player chose to Turn/Run back to the cabin
        // Ending: A Night of Safety
        text: "The group panics and flees back to the cabin, narrowly escaping the forest's grasp. They decide to stay inside, where they can control their surroundings, but the night is far from over. A loud crash from the woods sends them into a frenzy, and one by one, they are picked off by unseen forces as the cabin turns into a tomb.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 5
        // The player chose to Stay inside the cabin
        text: "Choosing to stay inside, the friends huddle close, trying to shake off the eerie feeling. As they distract themselves with games, the whispers continue outside, now mixed with faint cries for help. The tension in the cabin rises, and the atmosphere becomes increasingly oppressive.",
        choices: [
            {text: "Look out the window.", nextSegment: 6},
            {text: "Read the journal found in the attic.", nextSegment: 9}
        ]
    },
    {
        // index: 6
        // The player chose to Look out the window
        text: "Peering out the window, the friends see ghostly figures moving among the trees. Fear grips their hearts as they realize they might not be alone after all. The whispers turn into a soft chant, pulling them closer to the threshold of the cabin.",
        choices: [
            {text: "Open the door and step outside.", nextSegment: 7},
            {text: "Lock the door and gather in the living room.", nextSegment: 8}
        ]
    },
    {
        // index: 7
        // The player chose to Open the door and step outside
        // Ending: The Haunting Begins
        text: "Opening the door unleashes a torrent of malevolent energy. The friends are enveloped by the spirits, who seek revenge for their past. One by one, they are claimed, their screams swallowed by the night.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 8
        // The player chose to Lock the door and gather in the living room
        // Ending: A Night of Safety
        text: "Locking the door offers a brief respite. As they gather in the living room, they realize the cabin is alive with whispers. The fire flickers ominously, and they feel the walls closing in. Their hearts race as they hear something scratching at the door, desperate to be let in.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 9
        // The player chose to Read the journal found in the attic
        text: "As the friends recover from the chilling experience of the night, Evelyn opens the old journal, revealing entries filled with madness and despair. “We have to know what happened here,” she urges. But Jake is hesitant. “What if it’s cursed? We should burn it and be done with it.” The group debates, the tension rising as the pages reveal the tragic fates of those who came before.",
        choices: [
            {text: "Read more of the journal.", nextSegment: 10},
            {text: "Burn the journal.", nextSegment: 14}
        ]
    },
    {
        // index: 10
        // The player chose to Read more of the journal
        text: "Compelled by curiosity, the friends pour over the journal’s pages, uncovering dark secrets of betrayal and revenge. The whispers intensify, echoing the pain of the past. As they read, they realize the spirit’s anguish is tied to their presence.",
        choices: [
            {text: "Keep reading for a way to help the spirit.", nextSegment: 11},
            {text: "Burn the journal.", nextSegment: 14}
        ]
    },
    {
        // index: 11
        // The player chose to Keep reading for a way to help the spirit
        text: "They continue reading, finding a ritual that could potentially free the spirit. But they must perform it before midnight. The whispers turn frantic, urging them to hurry.",
        choices: [
            {text: "Attempt the ritual.", nextSegment: 12},
            {text: "Leave the cabin and run.", nextSegment: 13}
        ]
    },
    {
        // index: 12
        // The player chose to Attempt the ritual
        // Ending: The Spirit Freed
        text: "Performing the ritual allows the spirit to find peace. It expresses gratitude and guides the friends safely out of the forest, freeing them from its curse.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 13
        // The player chose to Leave the cabin and run
        // Ending: The Forest's Grasp
        text: "Choosing to run leads to chaos. The spirit, angered by their refusal to help, unleashes its fury, and the friends are trapped, lost to the whispers forever.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 14
        // The player chose to Burn the journal
        text: "In a moment of panic, the friends decide to burn the journal. Flames consume the pages, but instead of relief, the cabin shakes violently. The spirits, enraged by the destruction of their history, converge on the cabin.",
        choices: [
            {text: "Fight back against the spirits.", nextSegment: 15},
            {text: "Escape through a window.", nextSegment: 18}
        ]
    },
    {
        // index: 15
        // The player chose to Fight back against the spirits
        text: "The friends gather their courage and attempt to confront the spirits with improvised weapons. Their fight is futile as they realize the spirits are too powerful.",
        choices: [
            {text: "Continue fighting.", nextSegment: 16},
            {text: "Try to negotiate with the spirits.", nextSegment: 17}
        ]
    },
    {
        // index: 16
        // The player chose to Continue fighting
        // Ending: The Battle Lost
        text: "The spirits overpower them, dragging each friend into the darkness, their screams merging with the whispers of the lost.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 17
        // The player chose to Try to negotiate with the spirits
        // Ending: A Desperate Bargain
        text: "Attempting negotiation only fuels the spirits’ rage. They’re forced to confront their own fears and regrets. The friends vanish, one by one, leaving behind only silence.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    },
    {
        // index: 18
        // The player chose to Escape through a window
        // Ending: The Flight of Fear
        text: "Panicked, the friends choose to flee, bursting out of the cabin into the night. The forest comes alive with the spirit’s fury, branches clawing at their skin as they run. They realize too late that escape is impossible; the forest closes in, claiming them one by one, forever lost in its dark embrace.",
        choices: [
            {text: "", nextSegment: 0},
            {text: "", nextSegment: 0}
        ]
    }
];

export default segments;