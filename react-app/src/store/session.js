// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_PROFILE_IMAGE = 'session/UPDATE_PROFILE_IMAGE';


/*--------------------------------------------------------------------*/
//Action Creators
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const updateImageAction = (image) => ({
  type: UPDATE_PROFILE_IMAGE,
  payload: image,
})


/*--------------------------------------------------------------------*/
// Thunks

export const updateNameThunk = (nameOfUser, userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/name`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameOfUser
    })
  });

  if (response.ok) {
    const data = await response.json();
    await dispatch(setUser(data))

    return data
  }


}

export const updateUserName = (username, userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/username`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username
    })
  });

  if (response.ok) {
    const data = await response.json();
    await dispatch(setUser(data))
    return data
  }
}

export const updateEmail = (email, userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/email`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  });

  if (response.ok) {
    const data = await response.json();
    await dispatch(setUser(data))

    return data
  } else {
    const data = await response.json();
    console.log("something went wrong with updating email.")
    console.log(data.errors)
    return data
  }

}

export const updateProfileImageThunk = (imageData, userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/images`, {
    method: 'PATCH',
    body: imageData
  });

  const image = await response.json()


  if (response.ok) {
    await dispatch(updateImageAction(image.image_urls[0]))

    return image.image_urls[0]
  } else {
    console.log("ERROR IN updateProfileImageThunk")
  }
}


export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}


export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (name, username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


/*--------------------------------------------------------------------*/
//REDUCER

const initialState = { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }

    case UPDATE_PROFILE_IMAGE:
      let newState = { user: { ...state.user, profile_image: state.user.profile_image } }

      newState.user.profile_image = action.payload;

      return newState;
    default:
      return state;
  }
}
