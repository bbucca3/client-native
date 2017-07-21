// create user
//  send username
//  snooze default false
//  send id back in response

const fakeMessage1 = {
  id: 1,
  user_id: null,
  title: "some good hair",
  text: "check out my son's hair collection",
  post_id: null,
  geotag: {
    coords: {
      altitudeAccuracy:-1,
      accuracy:5,
      heading:-1,
      longitude:-122.406417,
      altitude:0,
      latitude:37.785834,
      speed:-1
    },
    timestamp:1500154759479.4531
  },
  subreddit_id: null,
  upvotes: 0
};

const fakeMessage2 = {
  id: 2,
  user_id: null,
  title: "I built a hotdog rifle",
  text: "it shoots hotdogs",
  post_id: null,
  geotag: {
    coords: {
      altitudeAccuracy:-1,
      accuracy:5,
      heading:-1,
      longitude:-121.406417,
      altitude:0,
      latitude:37.785834,
      speed:-1
    },
    timestamp:1500154759479.4531
  },
  subreddit_id: null,
  upvotes: 0
}

const sampleStore = {
  user: {
    user_id: 1,
    username: "radDad69",
    snooze: false,
    subscriptions: [
      "Leftovers",
      "Local",
      "Cats",
      "Space",
      "Eggs"
    ],
  },
  subreddit: {
    id: 1,
    title: "leftovers",
    description: "creative things to do with unused food"
  },
  subredditPosts: [
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2,
    fakeMessage1,
    fakeMessage2
  ]
}


const createUserData = {
  username: "radDad69",
  snooze: false
};

// create Message
//  send user_id
//    text
//    title
//    type: comment/post
//    post_id (parent)
//    geotag: coords
//    subreddit_id
//  upvote default to 0
//  send id back in response

// upvote
//  send user_id (voter)
//    message_id
//  send back id

const createUpvoteData = {
  user_id: null,
  message_id: null,
}

// snooze


// Geolocation post

// get Posts by subreddit

export default sampleStore;

// get notifications by id

// auth

// post user settings

// post subreddit settings

// get settings
