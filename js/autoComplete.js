const states = ["Ursa Major gets additional funding for its 3D printing manufacturing facility","Antares launches Cygnus to ISS","US Space Command To Stay In Colorado","Virgin Galactic banks $2 million in quarterly revenue after first commercial spaceflight", "The Atlantic is frying, but so far hurricanes are dying. What’s going on?", "Boeing’s Mulholland Urges Vocal Advocacy for ISS Amid Budget Gloom"];

const autoCompleteJs = new autoComplete ({
    selector: '#autoComplete',
    placeHolder: 'Search states',
    data: {
        src: states,
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJs.input.value = selection;
            },
        },
    },

    resultList: {
        maxResults: 15,
    },
    searchEngine: 'strict',
});