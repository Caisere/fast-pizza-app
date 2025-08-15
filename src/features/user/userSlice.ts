import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";
import type { RootState } from "../../store";


interface FetchAddressResult {
    position: { lat: number; lng: number; };
    address: string;
}


function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// using the createAsyncThunk function to get user location when get location action is being called
export const fetchAddress = createAsyncThunk<FetchAddressResult, void>('user/fetchAddress', async function(){
    const positionObj = await getPosition() as GeolocationPosition // get the current location object

    // extract out the longitude and latitude
    const position = {
        lat: positionObj.coords.latitude,
        lng: positionObj.coords.longitude
    }
    
    // run the getAddress function with the longitude and latitude variables from the position above 
    const addressObj = await getAddress(position);

    // compute the address from the object return from the getAddress function stored in the addressObj above
    const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.countryName}`
    console.log(addressObj);

    // return the position and address when fetchAddress is being called
    return {position, address}
})

// fetchAddress()

type InitialState = {
    userName: string,
    status: string,
    position: {
        lat: number | null,
        lng: number | null
    },
    address: string,
    error: string
}


//initial state
const initialState: InitialState = {
    userName: '',
    status: 'idle',
    position: {
        lat: null, 
        lng: null,
    },
    address: '',
    error: ''
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //action creator function
        createUser(state, action) {
            state.userName = action.payload
        }
    },
    // extra Reducer object to manage the Redux Thunk with (pending, fulfilled and rejected) state.
    extraReducers: (builder) => builder
        .addCase(fetchAddress.pending, (state) => { // pending state action
            state.status === 'loading'
        })
        .addCase(fetchAddress.fulfilled, (state, action) => {  // fulfilled/success state action
            state.position = action.payload.position
            state.address = action.payload.address,
            state.status = 'idle'
        })
        .addCase(fetchAddress.rejected, (state) => { // rejected/error state action 
            state.error = 'Error while getting your Geolocation. Please, manually input your address as it will be needed for delivery'
        })
})

export const {createUser } = userSlice.actions

export default userSlice.reducer


export const getUserName = ((store:RootState) => store.user.userName);
