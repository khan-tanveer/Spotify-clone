export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after the finished project
    // token: 'BQDb_IELHQFCIjGuqowpeHl4_GqFZOQuyWnW0-FGiUhhaVOMrtYMGsf53eD8gBqj8PDkjLi0H6AlGbWmXFib_zTpuBgm8d_-qdzvfyO5BpSR0GolLvx-tLUCBYSeaF4ijM0Az28iYI3c2TmxXC49BHuKvvD7pGCGgkfDYgkoE3m0oYdt',

};

const reducer = (state, action) => {
    console.log(action);

    // action -> type, [payload]


    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;